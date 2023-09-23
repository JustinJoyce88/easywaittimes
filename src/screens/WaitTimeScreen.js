import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Dimensions } from 'react-native';

const WaitTimeScreen = () => {

  return (
    <View style={styles.container}>
      <Text>WaitTimeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    backgroundColor: 'transparent',
  },
  versionText: {
    color: 'black',
    position: 'absolute',
    bottom: 30,
    right: 15,
  },
  copyText: {
    color: 'black',
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
});

export default WaitTimeScreen;