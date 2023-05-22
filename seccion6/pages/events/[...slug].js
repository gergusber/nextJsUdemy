import { getFilteredEvents } from '../../helpers/api-utils';
import EventList from '../../components/events/event-list'
import ResultsTitle from '../../components/events/results-title/results-title';
import Button from '../../components/layout/button/button';
import ErrorAlert from '../../components/layout/error-alert/error-alert';

const EventSearchedPage = (props) => {
  const { hasError = null, date = null, events = null } = props;
  
  const dateResults = new Date(date.numYear, date.numMonth - 1)

  if (hasError) {
    return <>
      <ErrorAlert >
        <p>invalid filter</p>
      </ErrorAlert>
      <div className='center'>
        <Button link='/events'>Show all events</Button>
      </div>
    </>
  }

  return <>
    <ResultsTitle date={dateResults} />
    <EventList items={events} />
  </>
}
export const getServerSideProps = async (context) => {
  const { params } = context;

  const filterData = params.slug;
  const numYear = +filterData[0];
  const numMonth = +filterData[1];

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth > 12 || numMonth < 1) {
    return {
      hasError: true
    }
  }

  const events = await getFilteredEvents({ year: numYear, month: numMonth })
  return {
    props: {
      events,
      date:{
        numYear,
        numMonth
      }
    }
  }
}



export default EventSearchedPage;