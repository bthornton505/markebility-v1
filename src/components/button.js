/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import "./layout.css"

const Button = (props) => {
  const { name, onClick } = props;

  return (
    <button onClick={() => onClick ? onClick() : null}>
      {name}
    </button>
  )
}

export default Button
