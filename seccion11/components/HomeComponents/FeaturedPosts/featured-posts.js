import classes from './featured-posts.module.css'
import PostGrid from '../../posts/posts-grid/posts-grid'

const FeaturedPosts = (props) => {
  const { posts } = props

  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  )
}



export default FeaturedPosts