import { useRouter } from 'next/router'
import { getEventById } from '../../data/dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/layout/error-alert/error-alert';


const EventDetailPage = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const event = getEventById(eventId);

  if (!event) {
    return <>
      <ErrorAlert >
        <p> No Event found</p>
      </ErrorAlert>
      <div className='center'>
        <Button link='/events'>Show all events</Button>
      </div>
    </>
  }

  return <>
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

export default EventDetailPage;