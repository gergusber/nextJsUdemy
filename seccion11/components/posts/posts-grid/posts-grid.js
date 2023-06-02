
import PostItem from '../post-item/post-item';
import classes from './posts-grid.module.css'

const PostGrid = (props) => {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      { posts.map(x => <PostItem post={x} key={x.slug} />)}
    </ul>
  )
}

export default PostGrid