import { Button, FormControl, Input, HStack, VStack, Icon, Text } from 'native-base'
import React, { useState } from 'react'
import SearchDropDown from '../dropdowns/SearchDropDown'
 

const Form = props => {
    const { onInputChange, fetchRecipes } = props
    const [formData, setData] = useState({})
    const [errors, setErrors] = useState({})
    const[option, setOption] = useState('movie')
    const [search, setSearch] = useState('');
  
    
    const onSubmit = () => {
      console.log(search, option)
        props.fetchResult(search, option);
    }


    return(
        <VStack space={2} width='100%' py={5}>
        <FormControl isRequired>
            <FormControl.Label fontSize='sm'> Search Movie/TV Show Name* </FormControl.Label>
            <HStack width='100%' space={2}>
                <Input
                placeholder='i.e. James Bond, CSI'
                variants='filled'
                bg='gray.200' 
                px={3} 
                width='85%'
           
                onChangeText={value => {
                    setSearch(value);
                }}
            
                />
                <Button onPress={onSubmit}>
                   <Text> Search </Text>
                </Button>
            </HStack>
        </FormControl>
        <SearchDropDown fetchOption={setOption}/>
        </VStack>
    )
}

export default Form