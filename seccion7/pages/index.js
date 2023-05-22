import { getFeaturedEvents } from '../helpers/api-utils';
import EventList from '../components/events/event-list';
const HomePage = (props) => {
  const { events } = props

  return <div>
    <EventList items={events} />
  </div>
}

export const getStaticProps = async () => {
  const data = await getFeaturedEvents();

  if (!data) {
    return {
      redirect: {
        destination: '/no-data'
      }
    }
  }

  return {
    props: {
      events: data
    },
    revalidate: 1800, // half hour, revalidate and update 
    // notFound: true,  // if the code to fails data is failing the return not found page.
    // redirect : {} // redirects to another page.
  };
}


export default HomePage;