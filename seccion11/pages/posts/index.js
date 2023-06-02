import AllPosts from "../../components/posts/all-posts/all-posts";
import { getAllPosts } from "../../lib/post-utils";

const Posts = (props) => {
  return <AllPosts posts={props.posts} />
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