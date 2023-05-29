import { useState, useEffect, useContext } from 'react';
import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import NotificationContext from '../../store/notification-context'


function Comments(props) {
  const { eventId } = props;
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const context = useContext(NotificationContext);
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    if(showComments){
      setIsFetching(true)
      console.log('Sending request to backend');
      fetch(`/api/comments/${eventId}`)
        .then(response => response.json())
        .then(data => {
          setComments(data.comments)
          setIsFetching(false)
        })
    } 
  }, [showComments])

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    // send data to API
    const { email, name, text } = commentData;
    
    context.showNotification({
      title: 'Adding comment',
      message: 'Creating comment',
      status: 'pending'
    })

    fetch(`/api/comments/${eventId}`, {
      method: 'post',
      body: JSON.stringify({ email, name, text }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        response.json()
      }
      else {
        response.json().then(data => {
          context.showNotification({
            title: 'Error',
            message: data.message || 'Registering to Newsletter failed',
            status: 'error'
          })
        })
      }
      })
      .then(data => {
        context.showNotification({
          title: 'Success!',
          message: 'Registering to comment correct',
          status: 'success'
        })
      })
      .catch(err => {
        context.showNotification({
          title: 'signing up failed..',
          message: err.message || 'Registering to Newsletter failed',
          status: 'error'
        })
      })
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !isFetching && <CommentList items={comments} />}
      {showComments && isFetching && <p>Loading...</p>}
      
    </section>
  );
}


export default Comments;
