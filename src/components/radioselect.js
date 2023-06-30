/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import "./layout.css"
import * as styles from "../components/index.module.css"

const RadioSelect = (props) => {
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
          type="radio" 
          name="flexRadioDefault" 
          value="Increase brand awareness" 
          id="IncreaseBrandAwareness"
          onClick={(e) => handleUpdate(question, e.target.value)}
        />
        <label className="form-check-label" for="IncreaseBrandAwareness">
          Increase brand awareness
        </label>
      </div>
      <div className="form-check">
        <input 
          className="form-check-input" 
          type="radio" 
          name="flexRadioDefault" 
          value="Drive website traffic and lead generation" 
          id="DriveWebsiteTrafficAndLeadGeneration"
          onClick={(e) => handleUpdate(question, e.target.value)}
        />
        <label className="form-check-label" for="DriveWebsiteTrafficAndLeadGeneration">
          Drive website traffic and lead generation
        </label>
      </div>
      <div className="form-check">
        <input 
          className="form-check-input" 
          type="radio" 
          name="flexRadioDefault" 
          value="Boost sales and revenue" 
          id="BoostSalesAndRevenue"
          onClick={(e) => handleUpdate(question, e.target.value)}
        />
        <label className="form-check-label" for="BoostSalesAndRevenue">
          Boost sales and revenue
        </label>
      </div>
      <div className="form-check">
        <input 
          className="form-check-input" 
          type="radio" 
          name="flexRadioDefault" 
          value="Enhance customer loyalty and retention" 
          id="EnhanceCustomerLoyaltyAndRetention"
          onClick={(e) => handleUpdate(question, e.target.value)}
        />
        <label className="form-check-label" for="EnhanceCustomerLoyaltyAndRetention">
          Enhance customer loyalty and retention
        </label>
      </div>
    </>
  )
}

export default RadioSelect
