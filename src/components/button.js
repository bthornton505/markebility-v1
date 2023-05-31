/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from 'react';
import "./layout.css"

const Button = (props) => {
  const { name, onClick } = props;

  return (
    <button onClick={() => onClick ? onClick() : null}
      style={{
        padding: '5px 25px',
        margin: '10px 0',
        borderRadius: '5px',
        borderWidth: '1px',
        backgroundColor: 'rgb(51, 135, 249, .8)',
        color: 'white'
      }}
    >
      {name}
    </button>
  )
}

export default Button
