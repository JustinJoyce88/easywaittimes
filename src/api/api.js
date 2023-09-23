export const getParksFromQueueTimes = async () => {
  try {
    const response = await fetch('https://queue-times.com/parks.json');
    const parksList = await response.json();
    const filteredParks = parksList.filter((park) => {
      if (park.name === 'Walt Disney Attractions' || park.name === 'Universal Parks & Resorts') {
        return park;
      }
    });
    return filteredParks;
  } catch (error) {
    console.error(error);
  }
};
