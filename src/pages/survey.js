import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import questions from "../constants/questions"
import * as styles from "../components/index.module.css"
import Button from "../components/button"

const placeholder = () => {
    console.log('clicked!')
}

const Question = () => {

}

const SurveyPage = () => (
  <Layout>
    <div className={styles.textLeft}>
      <h2 className={styles.intro}>
        {questions['nameOfBusiness']}
      </h2>
    </div>
    <div className={styles.textLeft}>
      <Button name={'Next'} onClick={placeholder}/>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Survey" />

export default SurveyPage
