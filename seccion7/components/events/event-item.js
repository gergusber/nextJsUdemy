import Link from 'next/link'
import classes from './event-item.module.css'
import Button from '../layout/button/button';

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const readableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const formattedAddress = location.replace(', ', '\n')

  return <li className={classes.item}>
    <img src={'/' + image} height={100} width={100}></img>
    <div className={classes.content}>
      <div className={classes.summary}>
        <h2>{title}</h2>
        <div className={classes.date}>
          <time>Date:{readableDate}</time>
        </div>
        <div className={classes.address}>
          <address>Address: {formattedAddress}</address>
        </div>
      </div>

      <div className={classes.actions}>
        {/* <Link href={{
          pathname: '/events/[id]',
          query: {
            id: id
          }
        }}>Explore</Link> */}
        <Button link={`/events/${id}`}>Explore</Button>
      </div>
    </div>
  </li >
}

export default EventItem