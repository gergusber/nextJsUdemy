import { getEventById, getFeaturedEvents } from '../../helpers/api-utils';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import Button from '../../components/layout/button/button';
import Head from 'next/head'

const EventDetailPage = (props) => {
  const { event = null } = props;

  if (!event) {
    return <>
      <div className='center'>
        <p> Loading...</p>
      </div >
      <div className='center'>
        <Button link='/events'>Show all events</Button>
      </div>
    </>
  }

  return <>
    <Head>
      <title>{event.title} </title>
      <meta name='description' content='Find a lot of great events that allows u to evolve...' />
    </Head>
    <EventSummary title={event.title} />
    <EventLogistics
      date={event.date}
      address={event.location}
      image={event.image}
      imageAlt={event.title} />
    <EventContent >
      <p>{event.description}</p>
    </EventContent>
  </>
}

export const getStaticPaths = async (context) => {
  const events = await getFeaturedEvents();
  const paths = events.map(event => ({ params: { eventId: event.id } })); // we construct the object of params with all the pIds dynamic 

  // The returned paths will be pre-rendered as static HTML at build time
  return {
    paths,
    fallback: 'blocking'// Set this to true if you have additional dynamic paths that are not listed here
  };
}

export const getStaticProps = async (context) => {
  const { eventId } = context.params;

  const event = await getEventById(eventId)

  return {
    props: {
      event
    },
    revalidate: 30,
  }
}



export default EventDetailPage;