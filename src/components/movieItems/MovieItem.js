import { FlatList, HStack, Box, Image, Heading, VStack, Button, Text } from 'native-base';
import * as React from 'react';
import { SafeAreaView, View } from 'react-native'



function MovieItem(props) {

    
    let [movies, setMovies] = React.useState(props.data);
    console.log("wererrrrrrrrrrrrrrrrrr", movies)
   
    
return (
     
    <SafeAreaView >
  
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
                    <Text> More Details </Text>
                  </Button>

                  
                </VStack>
    </Box>


     </HStack>


          )
        }
          // keyExtractor={movie => movie.id}
          keyExtractor={movie => movie.id.toString()}
        />

      </SafeAreaView>
  
    );
  }
  export default MovieItem;