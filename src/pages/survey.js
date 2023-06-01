import React, { useState } from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"
import questions from "../constants/questions"
import * as styles from "../components/index.module.css"
import Button from "../components/button"
import Input from "../components/input"
import Select from "../components/select"
import { Link } from "gatsby"

const SurveyPage = () => {
  const [index, setIndex] = useState(0);
  const [recommendation, setRecommendation] = useState({
    firstName: '',
    lastName: '',
    email: '',
    nameOfBusiness: '',
    businessOffering: '',
    marketingGoal: '',
    currentMarketingActivities: '',
    typicalCustomer: '',
    budgetTotal: ''
  })

  const back = () => {
    setIndex(index - 1)
  }

  const nextPage = () => {
    setIndex(index + 1)
  }

  const handleAnswers = (answer) => {
    console.log('this is working', answer)
    setRecommendation({ ...recommendation, answer })
  }

  const goals = [
    'Increase brand awareness',
    'Drive website traffic and lead generation',
    'Boost sales and revenue',
    'Enhance customer loyalty and retention'
  ]

  const activities = [
    'Social media',
    'Search engine optimization',
    'Email marketing campaigns',
    'Digital ads (paid search, display ads, etc.)',
    'Traditional media (newspapers, magazines, radio, TV)'
  ]

  const Question = () => {
    if (index === 0) {
      return (
        <>
          <Input label={'First Name'} value={recommendation['firstName']} question="firstName" handleAnswers={handleAnswers}/>
          <br></br>
          <Input label={'Last Name'} value={recommendation['lastName']} question="lastName" handleAnswers={handleAnswers}/>
          <br></br>
          <Input label={'Email'} value={recommendation['email']} question="email" handleAnswers={handleAnswers}/>
        </>
      )
    } else if (index == 1) {
      return <Input label={questions['nameOfBusiness']} value={recommendation['nameOfBusiness']} question="nameOfBusiness" handleAnswers={handleAnswers}/>
    } else if (index == 2) {
      return <Input label={questions['businessOffering']} value={recommendation['businessOffering']} question="businessOffering" handleAnswers={handleAnswers}/>
    } else if (index == 3) {
      return <Select label={questions['marketingGoal']} options={goals} value={recommendation['marketingGoal']} question="marketingGoal" handleAnswers={handleAnswers}/>
    } else if (index == 4) {
      return <Select label={questions['currentMarketingActivities']} options={activities} value={recommendation['currentMarketingActivities']} question="currentMarketingActivities" handleAnswers={handleAnswers}/>
    } else if (index == 5) {
      return <Input label={questions['typicalCustomer']} value={recommendation['typicalCustomer']} question="typicalCustomer" handleAnswers={handleAnswers}/>
    } else if (index == 6) {
      return <Input label={questions['budgetTotal']} value={recommendation['budgetTotal']} question="budgetTotal" handleAnswers={handleAnswers}/>
    }
  }

  return (
    <Layout>
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
              <Link to="/recommendation" style={{
                textDecoration: 'none'
              }}>
                <Button name={'Done'}/>
              </Link>
              :
              <Button name={'Next'} onClick={() => nextPage()}/>
            }
          </div>
        </div>
      </div>
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
