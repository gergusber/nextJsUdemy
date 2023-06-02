
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

const postDirectory = path.join(process.cwd(), 'content');

const getPostMetaData = (fileName) => {
  const postDir = path.join(postDirectory, fileName);
  const fileContent = fs.readFileSync(postDir, 'utf-8');
  const { data, content } = matter(fileContent);
  const postSlug = fileName.replace(/\.md$/, '') // removes the file extension

  return {
    ...data,
    slug: postSlug,
    content,
  }
}

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postDirectory);
  const allPosts = postFiles.map(postFile => getPostMetaData(postFile));
  const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

  return sortedPosts
}

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
console.log(allPosts);
  return allPosts.filter(post => post.isFeatured);
}

