import classes from './post-content.module.css'
import PostHeader from './post-header'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark, vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';


const PostContent = (props) => {
  const { post } = props
  const { title, content, image: postImage, slug } = post
  const imagePath = `/images/posts/${slug}/${postImage}`
  const customRenderers = {

    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300} />
          </div>
        );
      }

    },
    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          style={vscDarkPlus}
          language={language}
          children={children}
        />
      );
    },
  }

  return (
    <article className={classes.content} >
      <PostHeader title={title} image={imagePath} alt={title} />
      <ReactMarkdown components={customRenderers}>
        {content}
      </ReactMarkdown>
    </article >
  )
}


export default PostContent