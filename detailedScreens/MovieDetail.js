
import React, {useState, useEffect} from 'react';
import { Container, NativeBaseProvider, Text, Box, Image } from "native-base"

function MovieDetail({route}){
    const id = route.params.id
// let sar = route.params.sar

let [data, setData] = useState({ 
  "title": "",
  "poster_path" : "",
  "popularity": "",
  "overview": "",
  "release_date": ""
});
  
    
   
      const fetchData = async () => {
               const mov = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1fb9aab42d89bcab6ae7677c8f20004d&language=en-US`)
        const data = await mov.json();
        setData(data);
        console.log(data)
    }

    useEffect( () => {
        fetchData();
    },[]);


return (
<Container >
{data?.title ? <Text mb={5}>Title: {data.title}</Text> : "...."}
{data?.poster_path ? <Box>
                    <Image source = {{uri:`https://image.tmdb.org/t/p/w500/${data.poster_path}`}} alt = "detailedinfo" size='xl'/>
</Box> :
"...."


}

{data?.popularity ? <Text mb={5}>Popularity: {data.popularity}</Text> : "...."}
{data?.overview ? <Text mb={5}>Overview: {data.overview}</Text> : "...."}
{data?.release_date ? <Text mb={5}>Release Date: {data.release_date}</Text> : "...."}




</Container>

  );

}

export default MovieDetail