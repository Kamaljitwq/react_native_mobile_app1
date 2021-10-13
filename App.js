
import React, {useState, useEffect} from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button } from 'react-native'
import Movies from './screens/Movies';
import Search from './screens/Search';
import TV from './screens/TV';
const Tab = createMaterialTopTabNavigator();

import { Container, NativeBaseProvider, Text, Box, Image } from "native-base"
import MovieDetail from './detailedScreens/MovieDetail';
import TvDetail from './detailedScreens/TvDetail';
import SearchMore from './src/components/search/SearchMore';




function TabScreen({navigation}) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="Search" component={SearchMore} />
      <Tab.Screen name="TV" component={TV} />
    </Tab.Navigator>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (

    <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Movies App" component={TabScreen} />
        <Stack.Screen name="more" component={MovieDetail} />
        <Stack.Screen name="moretv" component={TvDetail} />
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>

  );
}

export default App;