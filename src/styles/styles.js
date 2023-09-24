import { Dimensions, StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(137, 207, 240, 0.1)',
  },
  parkItem: {
    width: Dimensions.get('window').width / 2.1,
    height: Dimensions.get('window').height / 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    margin: 5,
  },
  parkTitle: {
    fontFamily: 'Cochin',
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    width: '100%',
    paddingTop: 5,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  parkImage: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: 10,
    overflow: 'hidden',
  },
  landButton: {
    height: Dimensions.get('window').height / 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  landText: {
    fontSize: 28,
    fontFamily: 'Cochin',
  },
  rideContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rideName: { height: 80, width: '70%', justifyContent: 'center', paddingLeft: 10 },
  rideNameText: {
    fontSize: 18,
    textAlignVertical: 'center',
    fontFamily: 'Cochin',
  },
  rideTime: {
    height: 80,
    justifyContent: 'center',
  },
  rideTimeText: {
    fontSize: 24,
    textAlignVertical: 'center',
    fontFamily: 'Cochin',
  },
});
