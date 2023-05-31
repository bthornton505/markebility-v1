import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Button from "../components/button"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const RecommendationPage = () => (
  <Layout>
    <div className={styles.textLeft}>
      <p className={styles.intro}>
        <h3 style={{ marginBottom: '18px'}}>
          Here is your recommendation!
        </h3>
        detailed description from chat GPT of marketing recommendation
      </p>
    </div>
    <div className={styles.textLeft}>
      <Link to="/" style={{
        textDecoration: 'none'
      }}>
        <Button name={'Home'}/>
      </Link>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Recommendation Result" />

export default RecommendationPage
