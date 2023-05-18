import Link from 'next/link'
import classes from './event-item.module.css'

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
    <div>
      <div>
        <h2>{title}</h2>
        <div>
          <time>Date:{readableDate}</time>
        </div>
        <div>
          <address>Address: {formattedAddress}</address>
        </div>
      </div>

      <div>
        <Link href={{
          pathname: '/events/[id]',
          query: {
            id: id
          }
        }}>Explore</Link>
      </div>
    </div>
  </li >
}

export default EventItem