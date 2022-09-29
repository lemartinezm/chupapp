/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import PrimaryButton from './src/components/Buttons/PrimaryButton';
import Profile from './src/components/Profile/Profile';

import NavBar from './src/components/NavBar/NavBar';
import ProfileScreen from './src/screens/Profile';
import Home from './src/screens/Home';
import Chupas from './src/screens/Chupas';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ header: () => null }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Chupas" component={Chupas} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  hello: { fontSize: 20, fontFamily: 'Lexend-Bold' },
});
