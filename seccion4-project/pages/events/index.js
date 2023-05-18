import React from 'react'
import { getAllEvents } from '../../data/dummy-data';
import EventList from '../../components/events/event-list'
import EventsSearch from '../../components/events/events-search';
import { useRouter } from 'next/router'

const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();


  const findEventsHandler = (year, month) => {
    // const fullPath = `/events/${year}/${month}`
    // router.push(fullPath)
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

export default AllEventsPage;