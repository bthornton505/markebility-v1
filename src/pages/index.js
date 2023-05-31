import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Button from "../components/button"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "How it works",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "Experience AI-driven marketing made easy with Markebility. Our platform simplifies digital marketing for small businesses, even with no prior experience.",
  },
  {
    text: "Our Mission",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "Our mission is to make digital marketing accessible and effective for small business owners, regardless of their marketing expertise. With the power of AI, we're transforming the way businesses connect with their audience and achieve growth.",
  }
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

      <div className="row my-5">
        <h5>
          How it works:
        </h5>
        <div className="col-4">
          Fill in our short questionnaire to give us insights about your business.
        </div>
        {/* <div style={{borderLeft: '6px solid green', height: '500px'}}></div> */}
        <div className="col-4">
          Our advanced AI analyzes your inputs and formulates a bespoke marketing strategy.
        </div>
        {/* <div style={{borderLeft: '6px solid green', height: '500px'}}></div> */}
        <div className="col-4">
          You receive a detailed strategy, ready to be implemented!
        </div>
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
