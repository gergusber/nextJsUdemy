import React from 'react'
import { getAllEvents } from '../../helpers/api-utils';
import EventList from '../../components/events/event-list'
import EventsSearch from '../../components/events/events-search';
import { useRouter } from 'next/router'

const AllEventsPage = (props) => {
  const { events } = props;
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    router.push({
      pathname: '/events/[year]/[month]',
      query: {
        year,
        month
      }
    })
  }
  return <div>
    <EventsSearch onSearch={findEventsHandler} />
    <EventList items={events} />
  </div>
}

export const getStaticProps = async (context) => {
  const events = await getAllEvents();
  return {
    props: {
      events
    },
    revalidate: 30,
  }
}



export default AllEventsPage;