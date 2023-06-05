import Hero from '../components/HomeComponents/Hero/hero'
import FeaturedPosts from '../components/HomeComponents/FeaturedPosts/featured-posts'
import { getFeaturedPosts } from '../lib/post-utils';
import Head from "next/head";

const Homepage = (props) => {
  return (
    <>
      <Head>
        <title >German Blog</title>
        <meta name='description' content='I post about programming' />
      </Head>
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
