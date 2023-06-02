import React, { useState } from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"
import questions from "../constants/questions"
import * as styles from "../components/index.module.css"
import Button from "../components/button"
import Input from "../components/input"
import Select from "../components/select"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import axios from 'axios';

const SurveyPage = () => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(false)
  const [userId, setUserId] = useState(null)
  const [recommendationReqId, setRecommendationReqId] = useState(null)
  const [user, setUser] = useState({
    name: '',
    email: ''
  })
  const [recommendation, setRecommendation] = useState({
    nameOfBusiness: '',
    businessOffering: '',
    marketingGoal: '',
    currentMarketingActivities: '',
    typicalCustomer: '',
    budgetTotal: ''
  })

  const goals = [
    'select one',
    'Increase brand awareness',
    'Drive website traffic and lead generation',
    'Boost sales and revenue',
    'Enhance customer loyalty and retention'
  ]

  const activities = [
    'select one',
    'Social media',
    'Search engine optimization',
    'Email marketing campaigns',
    'Digital ads (paid search, display ads, etc.)',
    'Traditional media (newspapers, magazines, radio, TV)'
  ]

  const updateUser = (field, value) => {
    setUser({ ...user, [field]: value });
  }

  const handleAnswers = (field, value) => {
    setRecommendation({ ...recommendation, [field]: value });
  }

  const back = () => {
    setIndex(index - 1)
    setProgress(progress - 10)
  }

  const nextPage = async () => {
    if (index === 0){
      await axios.post('http://localhost:3000/users', user)
      .then(function (response) {
        const data = response.data
        setUserId(data.userId)
        setRecommendationReqId(data.newRecommendationRequestId)
      })
      .catch(function (error) {
        console.log(error);
      });
    } else {
      await updateRecommendation();
    }

    setIndex(index + 1)
    setProgress((index + 1) * 10)
  }

  const updateRecommendation = async () => {
    await axios.put('http://localhost:3000/recommendations', { recommendationReqId, recommendationData: recommendation })
    .then(function (response) {
      const data = response.data
      console.log('data', data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const submit = async () => {
    setLoading(true)
    await updateRecommendation();
    await axios.post('http://localhost:3000/recommendations', recommendation)
    .then(function (response) {
      const data = response.data
      console.log('data', data)
      setLoading(false)
      navigate("/recommendation")
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const Question = () => {
    if (index === 0) {
      return (
        <>
          <Input label={'Name'} value={user.name} question="name" handleUpdate={updateUser}/>
          <br></br>
          <Input label={'Email'} value={user.email} question="email" handleUpdate={updateUser}/>
        </>
      )
    } else if (index === 1) {
      return <Input label={questions['nameOfBusiness']} value={recommendation['nameOfBusiness']} question="nameOfBusiness" handleUpdate={handleAnswers}/>
    } else if (index === 2) {
      return <Input label={questions['businessOffering']} value={recommendation['businessOffering']} question="businessOffering" handleUpdate={handleAnswers}/>
    } else if (index === 3) {
      return <Select label={questions['marketingGoal']} options={goals} value={recommendation['marketingGoal']} question="marketingGoal" handleUpdate={handleAnswers}/>
    } else if (index === 4) {
      return <Select label={questions['currentMarketingActivities']} options={activities} value={recommendation['currentMarketingActivities']} question="currentMarketingActivities" handleUpdate={handleAnswers}/>
    } else if (index === 5) {
      return <Input label={questions['typicalCustomer']} value={recommendation['typicalCustomer']} question="typicalCustomer" handleUpdate={handleAnswers}/>
    } else if (index === 6) {
      return <Input label={questions['budgetTotal']} value={recommendation['budgetTotal']} question="budgetTotal" handleUpdate={handleAnswers}/>
    }
  }

  return (
    <Layout>
      {loading ? 
        <div class="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
          <span class="sr-only">Loading...</span>
        </div>
        :
        <>
          <div className="progress mb-5" style={{ height: '3px'}}>
            <div className="progress-bar" role="progressbar" style={{ width: `${progress}%`}} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="6"></div>
          </div>
          <div className={`row ${styles.textLeft}`} style={{
            border: 'solid',
            borderWidth: '1px',
            padding: '30px',
            borderRadius: '25px',
            boxShadow: '10px 10px'
          }}>
            <div className="col-md-6">
              <Question />
            </div>

            <div className={`row ${styles.textLeft}`} style={{ marginTop: '20px' }}>
              {index > 0 &&
                <div className={'col-md-3 col-sm-2'}>
                  <Button name={'Back'} onClick={() => back()}/>
                </div>
              }
              <div className={'col-md-3 col-sm-2'}>
                {index >= 6 ?
                  // <Link to="/recommendation" style={{
                  //   textDecoration: 'none'
                  // }}>
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
