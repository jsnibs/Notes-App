import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import Main from './main';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
          animated={true}
        />
        <Main />
      </NavigationContainer>
    </PaperProvider>
  );
}
