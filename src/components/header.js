import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      backgroundColor: `rgb(51, 135, 249)`
    }}
  >
    <div style={{
      margin: '0 70px'
    }}>
      <a href="https://markebility.com/" target="_blank" rel="noopener noreferrer"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
        <StaticImage 
          src="../images/Markebility-logos_transparent.png" 
          alt="Markebility logo" 
          height={100}
        />
      </a>
    </div>
  </header>
)

export default Header
