import React from 'react'
import { Input } from '@chakra-ui/react'

const Search = () => {

  return (
    <div>
         <Input placeholder='Enter Task or Assignee' name="task" w="md"  />
    </div>
  )
}

export default Search