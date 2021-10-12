import React, { useState } from 'react'
import { Select, VStack, CheckIcon } from 'native-base'

function SearchDropDown(props){

    const[service, setService] = useState('')
    
    function searchMore(){
        props.fetchOption(service)
    }
    
    return(
      <VStack alignItems="center" space={4}>
      <Select
        selectedValue={service}
        minWidth="200"
        accessibilityLabel="Choose Options"
        placeholder="Choose"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => {props.fetchOption(itemValue), setService(itemValue)}
        }
      >
    
        <Select.Item label="Movie" value="movie" />
        <Select.Item label="Multi" value="multi" />
        <Select.Item label="TV" value="tv" />
       
      </Select>
    </VStack>
    )

}

export default SearchDropDown