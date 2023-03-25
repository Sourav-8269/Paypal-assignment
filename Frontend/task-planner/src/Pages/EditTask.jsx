import React from 'react'
import {FormControl,Input,useToast,FormLabel,Box,Button,Select,Heading} from "@chakra-ui/react"
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getData, updateData } from '../Redux/App/action';
import axios from 'axios';

const EditTask = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const toast=useToast();
    const {id}=useParams();
    const [singleTask,setSingleTask]=useState({
        task:"",
        bug:"",
        feature:"",
        state:"",
        assignee:""
    })

    const getsingleTask=(id)=>{
        axios.get(`https://real-blue-fly-wear.cyclic.app/tasks/single/${id}`)
        .then((res)=>{
            // console.log(res.data)
            setSingleTask({
            ...singleTask,
            task:res.data?.task,
            bug:res.data?.bug,
            feature:res.data?.bug,
            assignee:res.data?.assignee,
            state:res.data?.state
        })})
        .catch((err)=>console.log(err))
    }

    useEffect(() => {
        getsingleTask(id);
    }, []);

    const handelSubmit=()=>{
        // console.log(singleTask)
        dispatch(updateData(id,singleTask))
        .then(()=>{
          dispatch(getData());
          toast({
            title: 'Updated Task Successfully',
            status: "success",
            duration: 2000,
            isClosable: true,
            position:"top"
          })
          navigate("/")
        })
        .catch((err)=>{
            toast({
                title: 'Something Went Wrong',
                status: "warning",
                duration: 2000,
                isClosable: true,
                position:"top"
              })
        })
    }

    const handleChange=(e)=>{
        const {name,value}=e.target;
        // console.log(name,value)
        setSingleTask({...singleTask,[name]:value})
    }
  return (
    <Box margin="auto" boxShadow='lg' p='8' rounded='md' mt={["20%","20%","8%"]}  w={["80%","70%","40%"]} mb="5%" >
        <Heading size="lg" as="h1" fontWeight="" textAlign={"left"} mb="3%" >Edit Product</Heading>
         <FormControl>
              <FormLabel>Task</FormLabel>
              <Input placeholder='Enter Task' name="task" value={singleTask?.task} onChange={handleChange} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Bug</FormLabel>
              <Input  placeholder='Enter Bug' name="bug" value={singleTask.bug} onChange={handleChange}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Feature</FormLabel>
              <Input placeholder='Enter Feature' name="feature" value={singleTask.feature} onChange={handleChange}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Assignee</FormLabel>
              <Input placeholder='Enter Assignee' name="assignee" value={singleTask.assignee} onChange={handleChange}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Status</FormLabel>
                <Select name="state" value={singleTask?.state} onChange={handleChange} >
                    <option value={true} >Completed</option>
                    <option value={false} >Pending</option>
                </Select>
            </FormControl>
            <Box display="flex" justifyContent="flex-end" mt="4%">
                <Button colorScheme='red' mr="3%" >Delete</Button>
                <Button colorScheme='messenger' ml="3%" onClick={handelSubmit} >Edit</Button>
            </Box>
    </Box>
  )
}

export default EditTask