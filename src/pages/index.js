import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textLeft}>
      <p className={styles.intro}>
        <h2>
          Your AI Digital Marketing Assistant
        </h2>
        Unlock your small business's potential with Markebility -
        the AI digital marketing assistant tailored for teams and individuals with little to no marketing experience.
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          {link.text}
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    <div className={styles.textLeft}>
      <h3>
        Try out our current experiment experience to see how our AI Marketing Assistant could help your business.
      </h3>
      <Link to="/survey" style={{
        textDecoration: 'none'
      }}>
        <Button name={'Get Started'}/>
      </Link>
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
