import React, { useEffect, useState } from 'react'

import Form from '../form/Form'
import { View, navigation } from 'native-base'
import MovieItem from '../movieItems/MovieItem'

function SearchMore(){
    const[search, setSearch] = useState('James Bond')
    
    const[data, setData] = useState()




    const fetchResult = async (search, option='movie') => {
        const random = await fetch(`https://api.themoviedb.org/3/search/${option}/?api_key=1fb9aab42d89bcab6ae7677c8f20004d&query=${search}`)
        const res = await random.json();
     console.log(res.results, "++++++++++++++++++")
        setData(res.results)
    }

// fetchResult(search, option)
    

return(
    <View>
    <Form fetchResult={fetchResult}/>

    {data? <MovieItem data = {data} /> : ""}

    </View>

)
}

export default SearchMore