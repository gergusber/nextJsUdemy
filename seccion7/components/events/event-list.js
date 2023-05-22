import EventItem from './event-item'
import classes from './event-list.module.css'

const EventList = (props) => {
  const { items } = props;

  return <ul className={classes.list}>
    {
      items.map(item => <EventItem
        key={item.id}
        title={item.title}
        image={item.image}
        date={item.date}
        location={item.location}
        id={item.id} />)
    }
  </ul>
}

export default EventList

