import React, { useState } from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"
import questions from "../constants/questions"
import * as styles from "../components/index.module.css"
import Button from "../components/button"
import Input from "../components/input"
import Select from "../components/select"

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
          <Input label={'First Name'} question="firstName" handleAnswers={handleAnswers}/>
          <br></br>
          <Input label={'Last Name'} question="lastName" handleAnswers={handleAnswers}/>
          <br></br>
          <Input label={'Email'} question="email" handleAnswers={handleAnswers}/>
        </>
      )
    } else if (index == 1) {
      return <Input label={questions['nameOfBusiness']} question="nameOfBusiness" handleAnswers={handleAnswers}/>
    } else if (index == 2) {
      return <Input label={questions['businessOffering']} question="businessOffering" handleAnswers={handleAnswers}/>
    } else if (index == 3) {
      return <Select label={questions['marketingGoal']} options={goals} question="marketingGoal" handleAnswers={handleAnswers}/>
    } else if (index == 4) {
      return <Select label={questions['currentMarketingActivities']} options={activities} question="currentMarketingActivities" handleAnswers={handleAnswers}/>
    } else if (index == 5) {
      return <Input label={questions['typicalCustomer']} question="typicalCustomer" handleAnswers={handleAnswers}/>
    } else if (index == 6) {
      return <Input label={questions['budgetTotal']} question="budgetTotal" handleAnswers={handleAnswers}/>
    } else if (index == 7) {
      return <Input label={questions['businessOffering']} question="businessOffering" handleAnswers={handleAnswers}/>
    }
  }

  return (
    <Layout>
      <div className={styles.textLeft} style={{
        border: 'solid',
        borderWidth: '1px',
        padding: '30px',
        borderRadius: '35px',
        boxShadow: '10px 10px'
      }}>
        <Question />

        <div className={`row ${styles.textLeft}`} style={{ marginTop: '20px' }}>
          {index > 0 &&
            <div className={'col-2'}>
              <Button name={'Back'} onClick={() => back()}/>
            </div>
          }
          <div className={'col-3'}>
            <Button name={'Next'} onClick={() => nextPage()}/>
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
