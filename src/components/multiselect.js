/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import "./layout.css"
import * as styles from "../components/index.module.css"

const MultiSelect = (props) => {
  const { label, question, handleUpdate } = props;

  return (
    <>
      <label htmlFor={label}>
        <h2 className={styles.intro} style={{display: 'flex', flexDirection: 'column'}}>
          {label}
        </h2>
      </label>
      <div className="form-check mt-3">
        <input 
          className="form-check-input" 
          type="checkbox" 
          value="Social media" 
          id="socialMedia" 
          onChange={(e) => handleUpdate(question, e.target.value, e.target.checked)}
        />
        <label className="form-check-label" for="socialMedia">
          Social media
        </label>
      </div>
      <div className="form-check">
        <input 
          className="form-check-input" 
          type="checkbox" 
          value="Search engine optimization" 
          id="searchEngineOptimization" 
          onChange={(e) => handleUpdate(question, e.target.value, e.target.checked)}
        />
        <label className="form-check-label" for="searchEngineOptimization">
          Search engine optimization
        </label>
      </div>
      <div className="form-check">
        <input 
          className="form-check-input" 
          type="checkbox" 
          value="Email marketing campaigns" 
          id="emailMarketingCampaigns" 
          onChange={(e) => handleUpdate(question, e.target.value, e.target.checked)}
        />
        <label className="form-check-label" for="emailMarketingCampaigns">
          Email marketing campaigns
        </label>
      </div>
      <div className="form-check">
        <input 
          className="form-check-input" 
          type="checkbox" 
          value="Digital ads (paid search, display ads, etc.)" 
          id="digitalAds" 
          onChange={(e) => handleUpdate(question, e.target.value, e.target.checked)}
        />
        <label className="form-check-label" for="digitalAds">
          Digital ads (paid search, display ads, etc.)
        </label>
      </div>
      <div className="form-check">
        <input 
          className="form-check-input" 
          type="checkbox" 
          value="Traditional media (newspapers, magazines, radio, TV)" 
          id="traditionalMedia" 
          onChange={(e) => handleUpdate(question, e.target.value, e.target.checked)}
        />
        <label className="form-check-label" for="traditionalMedia">
          Traditional media (newspapers, magazines, radio, TV)
        </label>
      </div>
    </>
  )
}

export default MultiSelect
