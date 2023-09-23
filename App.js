import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import React from 'react';
import { store } from './src/store/store';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import DisneyTab from './src/screens/DisneyTab';
import UniversalTab from './src/screens/UniversalTab';
import WaitTimeScreen from './src/screens/WaitTimeScreen';

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
          <Stack.Navigator>
            <Stack.Screen name="Easy Wait Times" component={Home} />
            <Stack.Screen
              name="Wait Times"
              component={WaitTimeScreen}
              options={{ headerShown: false }}
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
