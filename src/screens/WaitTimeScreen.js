import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';

import { FlatList } from 'react-native-gesture-handler';
import { getQueueTimes } from '../api/api';
import { globalStyles } from '../styles/styles';
import renderIf from '../utils/renderIf';

const WaitTimeScreen = (props) => {
  const { route } = props;
  [waitTimes, setWaitTimes] = useState([]);

  const getItemList = useCallback(async () => {
    const response = await getQueueTimes(route.params.park.id);
    response.lands.forEach((item) => {
      item.backgroundColor =
        'hsl(' +
        360 * Math.random() +
        ',' +
        (25 + 70 * Math.random()) +
        '%,' +
        (85 + 10 * Math.random()) +
        '%)';
      item.isOpen = false;
    });
    setWaitTimes(response?.lands);
  }, []);

  useEffect(() => {
    getItemList();
  }, []);

  setAccordionOpen = (index) => {
    const updatedWaitTimes = waitTimes.map((waitTime, i) => ({
      ...waitTime,
      isOpen: i === index ? !waitTime.isOpen : false,
    }));
    setWaitTimes(updatedWaitTimes);
  };

  renderRides = ({ item, index }) => {
    const bgColor = index % 2 ? 'rgba(137, 207, 240, 0.1)' : 'rgba(137, 207, 240, 0.3)';
    return (
      <>
        <View style={[globalStyles.rideContainer, { backgroundColor: bgColor }]}>
          <View style={globalStyles.rideName}>
            <Text style={globalStyles.rideNameText}>{item.name}</Text>
          </View>
          <View style={globalStyles.rideTime}>
            <Text style={globalStyles.rideTimeText}>
              {item.is_open ? `${item.wait_time} Mins` : 'Closed'}
            </Text>
          </View>
        </View>
      </>
    );
  };
  renderLands = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          style={[globalStyles.landButton, { backgroundColor: item.backgroundColor }]}
          onPress={() => setAccordionOpen(index)}
        >
          <Text style={globalStyles.landText}>{item.name}</Text>
        </TouchableOpacity>
        {renderIf(
          item.isOpen,
          <FlatList
            contentContainerStyle={{ paddingHorizontal: 10 }}
            data={item.rides.sort((a, b) => a.name - b.name)}
            renderItem={(item, index) => renderRides(item, index)}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    );
  };

  if (waitTimes) {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={{ marginTop: 2 }}
          data={waitTimes.sort((a, b) => a.name - b.name)}
          renderItem={(item, index) => renderLands(item, index)}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
  return (
    <View style={{ justifyContent: 'center', flex: 1 }}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WaitTimeScreen;
