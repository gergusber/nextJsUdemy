import classes from './hero.module.css'
import Image from 'next/image'
import image from '../../../public/images/site/german-1.png'

const Hero = () => {

  return <section className={classes.hero}>
    <div className={classes.image}>
      <Image src='/images/site/german-1.png' alt='an image' width={300} height={300} />
    </div>
    <h1> Hi, im German </h1>
    <p> I blog. </p>
  </section>
}

export default Hero