import React, { useEffect, useState } from 'react'
import SearchDropDown from '../dropdowns/SearchDropDown'
import Form from '../form/Form'
import { View, navigation } from 'native-base'
import Movies from '../../../screens/Movies'

function SearchMore(){
    const[search, setSearch] = useState('James Bond')
    const[option, setOption] = useState('movie')
    const[data, setData] = useState([])

    function fetchSearch(more){
        setSearch(more)
        console.log(more)
    }

    
    function fetchOption(me){
        setOption(me)
        console.log(option)
    }

    const fetchResult = async (search, option='movie') => {
        const random = await fetch(`https://api.themoviedb.org/3/search/${option}/?api_key=1fb9aab42d89bcab6ae7677c8f20004d&query=${search}`)
        const res = await random.json();
     console.log(res)
        setData(res.results)
    }
 useEffect(()=> {
    fetchResult(search, option)
 }, [])
// fetchResult(search, option)
    

return(
    <View>
    <Form fetchSearch={fetchSearch}/>
    <SearchDropDown fetchOption={fetchOption}/>
    <Movies data = {data} />

    </View>

)
}

export default SearchMore