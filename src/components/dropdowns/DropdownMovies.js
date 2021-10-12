import React from "react"
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from "native-base"


export const DropdownMovies = (props) => {
  let [service, setService] = React.useState("")
  return (
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
        onValueChange={(itemValue) => {setService(itemValue);
            props.onSelect(itemValue)}
        }
      >
     <Select.Item label="now playing" value="now_playing" />
        <Select.Item label="popular" value="popular" />
        <Select.Item label="top rated" value="top_rated" />
        <Select.Item label="upcoming" value="upcoming" />
      </Select>
    </VStack>
  )
}


