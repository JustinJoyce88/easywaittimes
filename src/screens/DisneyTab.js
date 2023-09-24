import * as React from 'react';

import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import QueueTimesCredit from '../components/QueueTimesCredit';
import allParks from '../data/allParks';
import { globalStyles } from '../styles/styles';

const DisneyTab = (props) => {
  const { navigation } = props;
  const disneyParks = allParks.find((item) => item.name === 'Walt Disney World');

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Wait Times', { park: item })}
        style={[globalStyles.parkItem, { backgroundColor: item.color }]}
      >
        <Text style={globalStyles.parkTitle}>{item.name}</Text>
        <Image
          style={globalStyles.parkImage}
          resizeMode="cover"
          maxHeight={'80%'}
          maxWidth={'100%'}
          source={item.imageUri}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ marginTop: 5 }}
        numColumns={2}
        data={disneyParks.parks}
        renderItem={(item) => renderItem(item)}
        keyExtractor={(item) => item.id}
      />
      <QueueTimesCredit />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(137, 207, 240, 0.1)',
  },
});

export default DisneyTab;
