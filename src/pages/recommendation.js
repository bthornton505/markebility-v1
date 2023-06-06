import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Button from "../components/button"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import axios from "axios"

const RecommendationPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [feedback, setFeedback] = useState('')

  const submitFeedback = async () => {
    await axios.post('http://localhost:3000/recommendations/feedback', { userId: '123456', email: 'bthornton@gmail.com', feedback })
    .then(function (response) {
      const data = response.data
      setShowModal(false)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
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
      <div className={styles.textLeft}>
        <Button name={'Feedback'} onClick={() => setShowModal(true)}/>
      </div>

      <div className="modal" 
          tabindex="-1" 
          style={{ 
            display: showModal ? 'block' : 'none' ,
            backgroundColor: 'rgba(0, 0, 0, .5)'
          }}
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header bg-info text-white">
            <h5 class="modal-title"> 
                Tell us about your recommendation
            </h5>
              <button onClick={() => setShowModal(false)}
                className="btn btn-block"
                style={{
                  padding: '5px 25px',
                  margin: '10px 0',
                  borderRadius: '3px',
                  borderWidth: '0',
                  color: 'white',
                  fontSize: '25px'
                }}
              >
                &times;
              </button>
            </div>
            <div class="modal-body">
              <textarea
                onChange={(e) => setFeedback(e.target.value)}
                style={{
                  width: '100%',
                  fontSize: '15px',
                  padding: '10px'
                }}
              ></textarea>
            </div>
            <div className='px-4 pb-3'>
              <Button name={'Submit'} onClick={() => submitFeedback()}/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Recommendation Result" />

export default RecommendationPage
