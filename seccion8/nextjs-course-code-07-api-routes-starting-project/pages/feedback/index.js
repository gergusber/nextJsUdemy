
import { getFileData, buildPath } from '../api/feedback'
import { useState } from 'react'

const FeedbackPage = (props) => {
  const [feedbackData, setFeedbackData] = useState()

  const seeDetailsHandler = (feedbackId) => {

    fetch(`/api/feedback/${feedbackId}`)
      .then(response => response.json())
      .then(data => {
        setFeedbackData(data.feedback)
      })

  }

  return <>
    {feedbackData && <p>{feedbackData.email}</p>}

  <hr />
      
  <ul>
    {props.fetchedItems.map(feedback => <li id={feedback.id}>
      {feedback.feedback}
      <button onClick={seeDetailsHandler.bind(null, feedback.id)}> show Details</button>
    </li>)}
  </ul>
        
  </>
}
export async function getStaticProps() {
  const path = buildPath();
  const fetchedItems = await getFileData(path);

  return {
    props: {
      fetchedItems
    }
  }
}


export default FeedbackPage;