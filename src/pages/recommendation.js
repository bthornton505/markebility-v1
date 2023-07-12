import React, { useContext, useState } from "react"
import Layout from "../components/layout"
import Button from "../components/button"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import axios from "axios"
import { AppContext } from '../context/appContext';

const RecommendationPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [feedback, setFeedback] = useState('')
  const { state } = useContext(AppContext)
  const [alert, setAlert] = useState(null)
  const [error, setError] = useState(null)

  const brandStrategy = state.recommendation ? state.recommendation.brandStrategy.replace('Brand Strategy:','') : '';
  const creativeStrategy = state.recommendation ? state.recommendation.creativeStrategy.replace('Creative Strategy:','') : '';
  const organicMediaStrategy = state.recommendation ? state.recommendation.organicMediaStrategy.replace('Organic Media Strategy:','') : '';
  const paidMediaStrategy = state.recommendation ? state.recommendation.paidMediaStrategy.replace('Paid Media Strategy:','') : '';
  const otherMarketingRecommendations = state.recommendation ? state.recommendation.otherMarketingRecommendations.replace('Other Marketing Recommendations:','') : '';

  const alertClass = () => {
    return alert ? 'alert-success' : 'alert-danger'
  }

  const submitFeedback = async () => {
    await axios.post(`${process.env.GATSBY_API_URI}/recommendations/feedback`, { userId: '123456', email: 'bthornton@gmail.com', feedback })
    .then(function (response) {
      const data = response.data
      setShowModal(false)
      setAlert(data)
    })
    .catch(function (error) {
      console.log(error);
      setError(error)
    });
  }

  return (
    <Layout>
      <>
        {alert &&
          <div className={`alert ${alertClass()} alert-dismissible mb-4`} role="alert">
            {alert}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        }
        <div className={styles.textLeft}>
          <h3 style={{ marginBottom: '18px'}}>
            Here is your recommendation!
          </h3>
          <p className={styles.intro}>
            {state.recommendation.intro}
            <div className="my-4">
              {/* <h5>Brand Strategy:</h5> */}
              <p>{state.recommendation.brandStrategy}</p>
              {/* <br/> */}
              {/* <h5>Creative Strategy:</h5> */}
              <p>{state.recommendation.creativeStrategy}</p>
              {/* <br/> */}
              {/* <h5>Organic Meda Strategy:</h5> */}
              <p>{state.recommendation.organicMediaStrategy}</p>
              {/* <br/> */}
              {/* <h5>Paid Media Strategy:</h5> */}
              <p>{state.recommendation.paidMediaStrategy}</p>
              {/* <br/> */}
              {/* <h5>Other Marketing Recommendations:</h5> */}
              <p>{state.recommendation.otherMarketingRecommendations}</p>
            </div>
            {state.recommendation.ending}
          </p>
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
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header bg-info text-white">
              <h5 className="modal-title"> 
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
              <div className="modal-body">
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
      </> 
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
