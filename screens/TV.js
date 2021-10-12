import { FlatList, HStack, Box, Image, Heading, VStack , Button } from 'native-base';
import * as React from 'react';
import { SafeAreaView, Text, View } from 'react-native'
import { DropdownTv } from '../src/components/dropdowns/DropdownTv';


function TV({navigation}) {

    
    let [tv, setTv] = React.useState([]);
    const getTv = async (option="popular") => {
      const tvFromUrl = await fetchTv(option)
      setTv(tvFromUrl.results)
    }

    
    React.useEffect(() => {
     
      getTv()
        }, [])

      // Fetching Movies

      const fetchTv = async (option) => {
        const mov = await fetch (`https://api.themoviedb.org/3/tv/${option}?api_key=1fb9aab42d89bcab6ae7677c8f20004d&language=en-US&page=1`)
        const data = await mov.json()
      
        return data
      }


    
return (
     
    <SafeAreaView >
      <Box>
        <DropdownTv onSelect = {getTv}/> 
      </Box>
            <FlatList
          data={tv}
          renderItem={({ item }) => (
    
     <HStack width="82%" mx="auto" space={2} >
         <Box mt={5}>
        <Image
        source={{
                uri: "https://image.tmdb.org/t/p/w500" + item.poster_path
              }}
        alt="Img"
        width="90"
        height="90"
        resizeMode="cover"
        />
    </Box>

    <Box mt={3} width="65%">
                <VStack>
                  <Heading width="66%" size="sm">{item.original_name}</Heading>
                  <Text fontSize="sm">Popularity: {item.popularity}</Text>
                  <Text fontSize="sm">Release Date: {item.first_air_date}</Text>
                  <Button size="md" width="70%" onPress={() => {
                    navigation.navigate('moretv', {id:item.id})                  }}>
                    More Details
                  </Button>

                  
                </VStack>
    </Box>


     </HStack>


          )
        }
          keyExtractor={shows => shows.id}
        />

      </SafeAreaView>
  
    );
  }
  export default TV;