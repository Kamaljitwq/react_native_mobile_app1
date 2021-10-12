
import React, {useState, useEffect} from 'react';
import { Container, NativeBaseProvider, Text, Box, Image } from "native-base"

function TvDetail({route}){
    const id = route.params.id
// let sar = route.params.sar

let [data, setData] = useState({ 
  "name": "",
  "poster_path" : "",
  "popularity": "",
  "overview": "",
  "first_air_date": ""
});
  
    
   
      const fetchData = async () => {
      const tv = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=1fb9aab42d89bcab6ae7677c8f20004d&language=en-US`)
        const data = await tv.json();
        setData(data);
        console.log(data)
    }

    useEffect( () => {
        fetchData();
    },[]);


return (
<Container >
{data?.name ? <Text mb={5}>Title: {data.name}</Text> : "...."}
{data?.poster_path ? <Box>
                    <Image source = {{uri:`https://image.tmdb.org/t/p/w500/${data.poster_path}`}} alt = "detailedinfo" size='xl'/>
</Box> :
"...."


}

{data?.popularity ? <Text mb={5}>Popularity: {data.popularity}</Text> : "...."}
{data?.overview ? <Text mb={5}>Overview: {data.overview}</Text> : "...."}
{data?.first_air_date ? <Text mb={5}>First Air Date: {data.first_air_date}</Text> : "...."}




</Container>

  );

}

export default TvDetail