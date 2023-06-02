import Hero from '../components/HomeComponents/Hero/hero'
import FeaturedPosts from '../components/HomeComponents/FeaturedPosts/featured-posts'
import { getFeaturedPosts } from '../lib/post-utils';
const Homepage = (props) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  )
}
export const getStaticProps = async () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 100
  }
}

export default Homepage
