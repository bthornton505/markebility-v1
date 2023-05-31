/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React, { useState } from 'react';
import "./layout.css"

const Button = (props) => {
  const { name, onClick } = props;

  return (
    <button onClick={() => onClick ? onClick() : null}
      style={{
        padding: '5px 25px',
        margin: '10px 0',
        borderRadius: '3px',
        borderWidth: '0',
        backgroundColor: 'rgb(123, 220, 124)',
        color: 'white'
      }}
    >
      {name}
    </button>
  )
}

export default Button
