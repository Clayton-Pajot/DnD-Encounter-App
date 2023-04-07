// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import EncountersScreen from './screens/EncountersScreen';
import EncounterScreen from './screens/EncounterScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options ={{headerShown: true}} name="Login" component={LoginScreen} />
        <Stack.Screen options ={{headerShown: true}} name="Encounter Screen" component={EncountersScreen} />
        <Stack.Screen options ={{headerShown: true}} name="Encounter" component={EncounterScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;