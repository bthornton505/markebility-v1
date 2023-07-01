import React, { useContext, useState } from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"
import questions from "../constants/questions"
import * as styles from "../components/index.module.css"
import Button from "../components/button"
import Input from "../components/input"
import Select from "../components/select"
import { navigate } from "gatsby"
import axios from 'axios';
import { AppContext } from '../context/appContext';
import TextBox from '../components/textBox';
import MultiSelect from '../components/multiselect';
import RadioSelect from '../components/radioselect';

const SurveyPage = () => {
  const { state, dispatch, updateUserState } = useContext(AppContext)
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)
  const [error, setError] = useState(null)
  const [userId, setUserId] = useState(null)
  const [selectedOptions, setSelectedOptions] = useState([])
  const [recommendationReqId, setRecommendationReqId] = useState(null)
  const [user, setUser] = useState({
    name: state.name,
    email: state.email
  })
  const [recommendation, setRecommendation] = useState(state.recommendationReq)

  const updateUser = (field, value) => {
    updateUserState({ ...user, [field]: value })
    setUser({ ...user, [field]: value });
  }

  const handleAnswers = (field, value) => {
    setRecommendation({ ...recommendation, [field]: value });
  }

  const handleMultiSelect = (field, value, checked) => {
    let selected = selectedOptions

    if (!checked) {
      selected = selectedOptions.filter(item => item != value)
    } else {
      selected.push(value)
    }

    setSelectedOptions(selected)
    setRecommendation({ ...recommendation, [field]: selected.join(', ') });
  }

  const back = () => {
    setIndex(index - 1)
    setProgress(progress - 10)
  }

  const alertClass = () => {
    return alert ? 'alert-success' : 'alert-danger'
  }

  const nextPage = async () => {
    if (index === 0){
      await axios.post(`${process.env.GATSBY_API_URI}/users`, user)
      .then(function (response) {
        const data = response.data
        setUserId(data.userId)
        setRecommendationReqId(data.newRecommendationRequestId)
      })
      .catch(function (error) {
        console.log(error);
        setError(error)
      });
    } else {
      await updateRecommendation();
    }

    setIndex(index + 1)
    setProgress((index + 1) * 10)
  }

  const updateRecommendation = async () => {
    await axios.put(`${process.env.GATSBY_API_URI}/recommendations`, { recommendationReqId, recommendationData: recommendation })
    .then(function (response) {
      const data = response.data
      console.log('data', data)
    })
    .catch(function (error) {
      console.log(error);
      setError(error)
    });
  }

  const submit = async () => {
    setLoading(true)
    await updateRecommendation();
    await axios.get(`${process.env.GATSBY_API_URI}/recommendations`, recommendation)
    .then(function (response) {
      const data = response.data
      dispatch({
        type: 'update_recommendation',
        payload: data.chatGptResponse
      })
      navigate("/recommendation")
    })
    .catch(function (error) {
      console.log(error);
      setError(error)
    });
  }

  const Question = () => {
    if (index === 0) {
      return (
        <>
          <Input label={'Name'} target={user['name']} question="name" handleUpdate={updateUser}/>
          <br></br>
          <Input label={'Email'} target={user['email']} question="email" handleUpdate={updateUser}/>
        </>
      )
    } else if (index === 1) {
      return <Input label={questions['nameOfBusiness']} target={recommendation['nameOfBusiness']} question="nameOfBusiness" handleUpdate={handleAnswers}/>
    } else if (index === 2) {
      return <TextBox label={questions['businessOffering']} target={recommendation['businessOffering']} question="businessOffering" handleUpdate={handleAnswers}/>
    } else if (index === 3) {
      return <RadioSelect label={questions['marketingGoal']} target={recommendation['marketingGoal']} question="marketingGoal" handleUpdate={handleAnswers}/>
    } else if (index === 4) {
      return <MultiSelect label={questions['currentMarketingActivities']} question="currentMarketingActivities" handleUpdate={handleMultiSelect}/>
    } else if (index === 5) {
      return <TextBox label={questions['typicalCustomer']} target={recommendation['typicalCustomer']} question="typicalCustomer" handleUpdate={handleAnswers}/>
    } else if (index === 6) {
      return <Input label={questions['budgetTotal']} target={recommendation['budgetTotal']} question="budgetTotal" handleUpdate={handleAnswers}/>
    }
  }

  return (
    <Layout>
      {error &&
        <div className={`alert ${alertClass()} alert-dismissible mb-4`} role="alert">
          {error}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      }
      {loading ? 
        <>
          <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status"></div>
          <div>
            <h2>Loading results from our AI. Recommendations can take up to 1 minute to generate...</h2>
          </div>
        </>
        :
        <>
          <div className="progress mb-3" style={{ height: '3px'}}>
            <div className="progress-bar" role="progressbar" style={{ width: `${progress}%`}} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="6"></div>
          </div>
          {alert &&
            <div className={`alert ${alertClass()} mb-4`} role="alert">
              A simple primary alert—check it out!
            </div>
          }
          <div className={`row mt-4 ${styles.textLeft}`} style={{
            border: 'solid',
            borderWidth: '1px',
            padding: '30px',
            borderRadius: '25px',
            boxShadow: '10px 10px'
          }}>
            <div className="col-md-6">
              {Question()}
            </div>

            <div className={`row ${styles.textLeft}`} style={{ marginTop: '20px' }}>
              {index > 0 &&
                <div className={'col-md-3 col-sm-2'}>
                  <Button name={'Back'} onClick={() => back()}/>
                </div>
              }
              <div className={'col-md-3 col-sm-2'}>
                {index >= 6 ?
                  <Button name={'Done'} onClick={() => submit()}/>
                  :
                  <Button name={'Next'} onClick={() => nextPage()}/>
                }
              </div>
            </div>
          </div>
        </>
      }
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Survey" />

export default SurveyPage
