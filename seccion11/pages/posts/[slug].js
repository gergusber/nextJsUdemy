import PostContent from "../../components/posts/post-detail/post-content"
import { getPostData, getAllPostFiles } from "../../lib/post-utils";
import Head from "next/head";


const PostDetailPage = (props) => {

  return <>
    <Head>
      <title>{props.post.title}</title>
      <meta name='description' content={props.post.excerpt} />
    </Head>
    <PostContent post={props.post} />
  </>
}

export const getStaticPaths = async () => {
  const postFiles = getAllPostFiles();
  const slugs = postFiles.map(fileName => fileName.replace(/\.md$/, ''));
  // return { // if we need to load it only when its needed
  //   paths:[],
  //   fallback: 'blocking'
  // }


  return {
    paths: slugs.map(slug => ({ params: { slug: slug } })),
    fallback: false
  }
}
export const getStaticProps = async (context) => {
  const { params } = context
  const { slug } = params;
  const post = getPostData(slug);
  return {
    props: {
      post
    },
    revalidate: 600
  }
}

export default PostDetailPage