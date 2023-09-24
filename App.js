import { SafeAreaView, StyleSheet } from 'react-native';

import DisneyTab from './src/screens/DisneyTab';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import React from 'react';
import UniversalTab from './src/screens/UniversalTab';
import WaitTimeScreen from './src/screens/WaitTimeScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from './src/store/store';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Walt Disney World" component={DisneyTab}></Tab.Screen>
      <Tab.Screen name="Universal Orlando" component={UniversalTab} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerBackTitleVisible: false,
            }}
          >
            <Stack.Screen name="Easy Wait Times" component={Home} />
            <Stack.Screen
              name="Wait Times"
              component={WaitTimeScreen}
              options={({ route }) => ({ title: route.params.park.name })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
