import React, { useState } from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"
import questions from "../constants/questions"
import * as styles from "../components/index.module.css"
import Button from "../components/button"
import Input from "../components/input"

const SurveyPage = () => {
  const [index, setIndex] = useState(0);

  const back = () => {
    setIndex(index - 1)
  }

  const nextPage = () => {
    setIndex(index + 1)
  }

  const Question = () => {
    if (index === 0) {
      return (
        <>
          <Input label={'First Name'} key="firstName"/>
          <br></br>
          <Input label={'Last Name'} key="lastName"/>
          <br></br>
          <Input label={'Email'} key="email"/>
        </>
      )
    } else if (index == 1) {
      return <Input label={questions['nameOfBusiness']} key="nameOfBusiness"/>
    } else if (index == 2) {
      return <Input label={questions['businessOffering']} key="businessOffering"/>
    } else if (index == 3) {
      return <Input label={questions['marketingGoal']} key="marketingGoal"/>
    } else if (index == 4) {
      return <Input label={questions['currentMarketingActivities']} key="currentMarketingActivities"/>
    } else if (index == 5) {
      return <Input label={questions['typicalCustomer']} key="typicalCustomer"/>
    } else if (index == 6) {
      return <Input label={questions['budgetTotal']} key="budgetTotal"/>
    } else if (index == 7) {
      return <Input label={questions['businessOffering']} key="businessOffering"/>
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
