import React from 'react'
import { Input,Button,Box } from '@chakra-ui/react'
import { useState,useEffect} from 'react';
import {useThrottle} from "use-throttle";
import { searchData } from '../Redux/App/action';
import { useDispatch } from 'react-redux';
import { store } from '../Redux/store';
const Search = () => {
  
    const [query,setquery]=useState("");
    const throttleText=useThrottle(query,1500)
    const dispatch=useDispatch();

    useEffect(() => {
           dispatch(searchData(throttleText))
    }, [throttleText]);

  return (
    <Box >
         <Input focusBorderColor='white' _placeholder={{ opacity: 1, color: "white" }} placeholder='Enter Task or Assignee' name="task"  value={query} onChange={(e)=>setquery(e.target.value)}  />
    </Box>
  )
}

export default Search