import { FlatList, HStack, Box, Image, Heading, VStack, Button } from 'native-base';
import * as React from 'react';
import { SafeAreaView, Text, View } from 'react-native'
import { DropdownMovies } from '../src/components/dropdowns/DropdownMovies';


function Movies({navigation}) {

    
    let [movies, setMovies] = React.useState([]);
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

    <Box mt={3} width="65%">
                <VStack>
                  <Heading width="66%" size="sm">{item.original_title}</Heading>
                  <Text fontSize="sm">Popularity: {item.popularity}</Text>
                  <Text fontSize="sm">Release Date: {item.release_date}</Text>

                  <Button size="md" width="70%" onPress={() => {
                    navigation.navigate('more', {id:item.id})                  }}>
                    More Details
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