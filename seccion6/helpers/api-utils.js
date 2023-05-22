const URL = process.env.URL_FETCH;

export const getAllEvents = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const events = []
  for (const key in data) {
    events.push({
      id: key,
      ...data[key]
    })
  }

  return events;
}

export const getFeaturedEvents = async () => {
  const events = await getAllEvents();
  return events.filter((event) => event.isFeatured);
}

export const getEventById = async (id) => {
  const events = await getAllEvents();
  return events.find((event) => event.id === id);
}

export const getFilteredEvents = async (dateFilter) => {
  const { year, month } = dateFilter;
  const events = await getAllEvents();

  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}