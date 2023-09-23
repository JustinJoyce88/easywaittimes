import { StyleSheet, Dimensions } from 'react-native';

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
});
