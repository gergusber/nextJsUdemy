import React from 'react'
import { useRouter } from 'next/router'

const BlogPostPage = () => {
  const router = useRouter();
  console.log(router.query.slug)
  return <div>
    <h1>The blog Post  {router.query.slug} </h1>
  </div>
}

export default BlogPostPage;