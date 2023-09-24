export const getQueueTimes = async (id) => {
  try {
    const response = await fetch(`https://queue-times.com/parks/${id}/queue_times.json`);
    const parksList = await response.json();
    return parksList;
  } catch (error) {
    console.error(error);
  }
};
