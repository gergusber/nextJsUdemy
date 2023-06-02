
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

const postDirectory = path.join(process.cwd(), 'content');

export const getPostData = (postIdentifier) => {
  const postSlug = postIdentifier.replace(/\.md$/, '') // removes the file extension
  const postDir = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(postDir, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    ...data,
    slug: postSlug,
    content,
  }
}

export const getAllPosts = () => {
  const postFiles = getPostsFiles();
  const allPosts = postFiles.map(postFile => getPostData(postFile));
  const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

  return sortedPosts
}

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  
  return allPosts.filter(post => post.isFeatured);
}

const getPostsFiles = () => {
  return fs.readdirSync(postDirectory);
}

export const getAllPostFiles = () => {
  return getPostsFiles(postDirectory);
}