import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Button from "../components/button"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const howItWorks = [
  'Fill in our short questionnaire to give us insights about your business.',
  'Our advanced AI analyzes your inputs and formulates a bespoke marketing strategy.',
  'You receive a detailed strategy, ready to be implemented!'
]

const IndexPage = () => (
  <Layout>
    <div className={styles.textLeft}>
      <p className={styles.intro}>
        <h3 style={{ marginBottom: '18px'}}>
          Get Your Personalized Marketing Strategy in Minutes
        </h3>
        Welcome to Markebility - your early-access AI-powered marketing strategist. 
        Simply answer a few quick questions about your business, and we'll provide you with a unique, 
        actionable marketing strategy.
      </p>

      <div className="mt-5">
        <h5>
          How it works:
        </h5>
        <ol className="row px-3">
          {howItWorks.map((item) => {
            return (
              <div className="col-md-4 mt-3">
                <li>{item}</li>
              </div>
            )
          })}
        </ol>
      </div>
    </div>
    <div className={styles.textLeft}>
      <Link to="/survey" style={{
        textDecoration: 'none'
      }}>
        <Button name={'Start Now'}/>
      </Link>
      <br></br>
      <div style={{ marginTop: '50px'}}>
        <i style={{ fontSize: '12px' }}>
          Please note: Markebility is in its early stages of development. 
          While we aim to provide accurate and useful strategies, we can't guarantee results. 
          The tool should be used as a guide rather than definitive advice. Errors may occur due to AI limitations.
        </i>
      </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
