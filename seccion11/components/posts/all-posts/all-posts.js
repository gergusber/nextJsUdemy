import PostGrid from '../posts-grid/posts-grid';
import classes from './all-posts.module.css'
const AllPosts = (props) => {
  const { posts } = props

  return (
    <section className={classes.posts}>
      <h2>All Posts</h2>
      <PostGrid posts={posts} />
    </section>
  )
}



export default AllPosts