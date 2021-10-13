import * as React from 'react';
import { FlatList, HStack, Box, Image, Heading, VStack, Button , Text} from 'native-base';

import { SafeAreaView } from 'react-native'

import { DropdownMovies } from '../src/components/dropdowns/DropdownMovies';


function Movies(props) {

    
    let [movies, setMovies] = React.useState(props.data);
    console.log("wererrrrrrrrrrrrrrrrrr", movies)
    const getMovies = async (option="top_rated") => {
      const moviesFromUrl = await fetchMovies(option)
     console.log(moviesFromUrl.results)
      setMovies(moviesFromUrl.results)
    }
    
    React.useEffect(() => {
      

      getMovies()
        }, [])

      // Fetching Movies

      const fetchMovies = async (option) => {
        const mov = await fetch (`https://api.themoviedb.org/3/movie/${option}?api_key=1fb9aab42d89bcab6ae7677c8f20004d`)
        const data = await mov.json()
      
        return data
      }


    
return (
     
    <SafeAreaView >
      <Box>
        <DropdownMovies onSelect = {getMovies}/> 
      </Box>
            <FlatList
          data={movies}
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

    <Box mt={4} width="72%">
                <VStack>
                  <Heading width="86%" size="md">{item.original_title}</Heading>
                  <Text fontSize="md">Popularity: {item.popularity}</Text>
                  <Text fontSize="md">Release Date: {item.release_date}</Text>

                  <Button size="md" width="71%" onPress={() => {
                    props.navigation.navigate('more', {id:item.id})                  }}>
                    <Text>More Details</Text>
                  </Button>

                  
                </VStack>
    </Box>


     </HStack>


          )
        }
          keyExtractor={movie => movie.id}
        />

      </SafeAreaView>
  
    );
  }
  export default Movies;