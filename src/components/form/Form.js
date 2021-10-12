import { Button, FormControl, Input, HStack, VStack, Icon } from 'native-base'
import React, { useState } from 'react'
 

const Form = props => {
    const { onInputChange, fetchRecipes } = props
    const [formData, setData] = useState({})
    const [errors, setErrors] = useState({})

    const [search, setSearch] = useState('');
  
    
    const onSubmit = () => {
        props.fetchSearch(search);
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
                    Search
                </Button>
            </HStack>
        </FormControl>
        </VStack>
    )
}

export default Form