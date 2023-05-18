import { getFeaturedEvents } from '../data/dummy-data'
import EventList from '../components/events/event-list'
const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  console.log(featuredEvents)

  return <div>
    <EventList items={featuredEvents} />
  </div>
}

export default HomePage;