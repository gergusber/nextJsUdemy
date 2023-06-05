import AllPosts from "../../components/posts/all-posts/all-posts";
import { getAllPosts } from "../../lib/post-utils";
import Head from "next/head";

const Posts = (props) => {
  return <>
    <Head>
      <title> All Posts</title>
      <meta name='description' content='A list of all programming related tutorials and posts' />
    </Head>
    <AllPosts posts={props.posts} />
  </>
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts
    },
    revalidate: 100
  }
}

export default Posts