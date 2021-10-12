
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

// function DetailScreen({route}) {
// const id = route.params.id
// let sar = route.params.sar

// let [data, setData] = useState({ 
//   "title": "",
//   "poster_path" : "",
//   "popularity": "",
//   "overview": "",
//   "release_date": ""
// });
  
    
   
//       const fetchData = async () => {
//                const mov = await fetch(`https://api.themoviedb.org/3/${sar}/${id}?api_key=1fb9aab42d89bcab6ae7677c8f20004d&language=en-US`)
//         const data = await mov.json();
//         setData(data);
//         console.log(data)
//     }

//     useEffect( () => {
//         fetchData();
//     },[]);


// return (
// <Container >
// {data?.title ? <Text mb={5}>Title: {data.title}</Text> : "...."}
// {data?.poster_path ? <Box>
//                     <Image source = {{uri:`https://image.tmdb.org/t/p/w500/${data.poster_path}`}} alt = "detailedinfo" size='xl'/>
// </Box> :
// "...."


// }

// {data?.popularity ? <Text mb={5}>Popularity: {data.popularity}</Text> : "...."}
// {data?.overview ? <Text mb={5}>Overview: {data.overview}</Text> : "...."}
// {data?.release_date ? <Text mb={5}>Release Date: {data.release_date}</Text> : "...."}




// </Container>

//   );
// }
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