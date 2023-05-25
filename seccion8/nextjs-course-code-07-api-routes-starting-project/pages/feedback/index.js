
import { getFileData, buildPath } from '../api/feedback'


const FeedbackPage = (props) => {

  return <ul>
    {props.fetchedItems.map(feedback => <li id={feedback.id}> {feedback.feedback}</li>)}
  </ul>
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