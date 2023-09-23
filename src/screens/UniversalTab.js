import * as React from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import allParks from '../data/allParks';
import { globalStyles } from '../styles/styles';

const UniversalTab = () => {
  const universalParks = allParks.find((item) => item.name === 'Universal Orlando');
  console.log("🚀 ~ file: UniversalTab.js:8 ~ UniversalTab ~ universalParks:", universalParks)

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={[globalStyles.parkItem, { backgroundColor: item.color }]}>
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
        data={universalParks.parks}
        renderItem={(item) => renderItem(item)}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(137, 207, 240, 0.1)',
  },
});

export default UniversalTab;
