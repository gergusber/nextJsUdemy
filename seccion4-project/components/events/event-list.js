import EventItem from './event-list-item'

const EventList = (props) => {
  const { items } = props;

  return <ul>
    {
      items.map(item => <EventItem
        title={item.title}
        image={item.image}
        date={item.date}
        location={item.location}
        id={item.id} />)
    }
  </ul>
}

export default EventList

