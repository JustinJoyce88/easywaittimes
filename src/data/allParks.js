export default allParks = [
  {
    name: 'Walt Disney World',
    parks: [
      {
        name: 'Magic Kingdom',
        id: 6,
        color: '#90C6FA',
        imageUri: require('../assets/MagicKingdom.jpg'),
      },
      { name: 'Epcot', id: 5, color: '#d42c87', imageUri: require('../assets/Epcot.jpg') },
      {
        name: 'Hollywood Studios',
        id: 7,
        color: '#37b8c3',
        imageUri: require('../assets/HollywoodStudios.jpg'),
      },
      {
        name: 'Animal Kingdom',
        id: 8,
        color: '#616a0f',
        imageUri: require('../assets/AnimalKingdom.jpg'),
      },
    ],
  },
  {
    name: 'Universal Orlando',
    parks: [
      {
        name: 'Universal Studios',
        id: 65,
        color: '#134388',
        imageUri: require('../assets/UniversalStudios.jpg'),
      },
      {
        name: 'Islands of Adventure',
        id: 64,
        color: '#cea24a',
        imageUri: require('../assets/IslandsOfAdventure.jpg'),
      }
    ],
  },
];
