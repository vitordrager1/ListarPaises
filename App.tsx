import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListCountryInfo from './src/screens/ListCountryInfo'

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lista" component={ListCountryInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;