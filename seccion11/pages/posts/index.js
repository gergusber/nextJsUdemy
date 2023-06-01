import FeaturedPosts from "../../components/HomeComponents/FeaturedPosts/featured-posts"

const Posts = () => {
  const featuredPosts = [
    {
      title: 'React patterns',
      excerpt: 'something for this post',
      image: 'getting-started-nextjs.png',
      slug: 'react-patterns1',
      date: '2022-01-01'
    },
    {
      title: 'React patterns2 ',
      excerpt: 'something for this post2',
      image: 'getting-started-nextjs.png',
      slug: 'react-patterns2',
      date: '2022-01-0'
    },
    {
      title: 'React patterns3',
      excerpt: 'something for this post',
      image: 'getting-started-nextjs.png',
      slug: 'react-patterns3',
      date: '2022-01-01'
    },
    {
      title: 'React patterns4',
      excerpt: 'something for this post2',
      image: 'getting-started-nextjs.png',
      slug: 'react-patterns4',
      date: '2022-01-02'
    }
  ];
  return <FeaturedPosts posts={featuredPosts} />
}

export default Posts