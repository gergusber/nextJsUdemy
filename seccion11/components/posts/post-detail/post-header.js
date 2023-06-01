import classes from './post-header.module.css'
import Image from 'next/image'

const PostHeader = (props) => {
  const { title, image } = props

  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={100} />
    </header>
  )
}



export default PostHeader