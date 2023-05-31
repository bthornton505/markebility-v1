/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import "./layout.css"
import * as styles from "../components/index.module.css"

const Input = (props) => {
  const { label, question, value, handleAnswers } = props;

  return (
    <>
      <label for={question}>
        <h2 className={styles.intro} style={{display: 'flex', flexDirection: 'column'}}>
          {label}
        </h2>
      </label>
      <input type="text" id={question} name={question} 
        value={value}
        onChange={(e) => handleAnswers({ [question]: e.target.value})}
        style={{
          outline: '0',
          borderWidth: '0 0 2px',
          width: '350px',
          fontSize: '20px'
        }}
      />
    </>
  )
}

export default Input
