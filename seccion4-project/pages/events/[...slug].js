import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../data/dummy-data';
import EventList from '../../components/events/event-list'
import ResultsTitle from '../../components/events/results-title/results-title';
import Button from '../../components/layout/button/button';
import ErrorAlert from '../../components/layout/error-alert/error-alert';
const EventSearchedPage = () => {

  const router = useRouter();

  console.log('slug:', router.query.slug)
  const filterData = router.query.slug;
  if (!filterData) {
    return <p className='center'>Loading...</p>
  }

  const numYear = +filterData[0];
  const numMonth = +filterData[1];

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth > 12 || numMonth < 1) {
    // return <p className='center'>invalid filter</p>
    return <>
    <ErrorAlert >
      <p>invalid filter</p>
    </ErrorAlert>
    <div className='center'>
        <Button link='/events'>Show all events</Button>
      </div>
  </>
  }

  const data = getFilteredEvents({ year: numYear, month: numMonth })
  if (!data || !data.length) {
    // return <p className='center'>No events found for the chosen filters</p>
    return <>
      <ErrorAlert alert='' >
        <p>No events found for the chosen filters</p>
      </ErrorAlert>
      <div className='center'>
          <Button link='/events'>Show all events</Button>
        </div>
    </>
  }

  const date = new Date(numYear, numMonth - 1)

  return <>
    <ResultsTitle date={date} />
    <EventList items={data} />
  </>
}

export default EventSearchedPage;