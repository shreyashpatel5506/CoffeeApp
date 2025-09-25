// 👇 Must be the first import in the entry file
import 'react-native-gesture-handler';
import 'react-native-reanimated';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';

import RootStack from './src/navigation/RootStack';

// Enable react-native-screens (improves performance too)
enableScreens();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
