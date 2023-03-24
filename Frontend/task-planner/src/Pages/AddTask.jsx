import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {Box,useDisclosure,Button,Modal,ModalBody,ModalOverlay,FormControl,Input,ModalFooter,FormLabel,ModalHeader,ModalCloseButton,ModalContent, Select} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import { addData, getData } from "../Redux/App/action";

const AddTask=()=>{
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const dispatch=useDispatch();
  const toast=useToast();
  
  const [task,settask]=useState("");
  const [bug,setbug]=useState("");
  const [feature,setfeature]=useState("");
  const [assignee,setassignee]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(task&&bug&&feature&&assignee){
      const payload={task,bug,feature,assignee,status:false};
      console.log(payload)
      if(payload){
        dispatch(addData(payload))
        .then(()=>{
          dispatch(getData());
          toast({
            title: 'Added Task Successfully',
            status: "success",
            duration: 2000,
            isClosable: true,
            position:"top"
          })
          onClose()
        })
        }
    }else{
      toast({
        title: 'Empty field',
        description: "Please fill all the details.",
        status: 'warning',
        duration: 4000,
        isClosable: true,
      })
    }
}

  return (
    <Box>
      <Button onClick={onOpen}>Add Task</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Task</FormLabel>
              <Input ref={initialRef} placeholder='Enter Task' value={task} onChange={(e)=>settask(e.target.value)} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Bug</FormLabel>
              <Input  ref={initialRef} placeholder='Enter Bug' value={bug} onChange={(e)=>setbug(e.target.value)}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Feature</FormLabel>
              <Input ref={initialRef} placeholder='Enter Feature' value={feature} onChange={(e)=>setfeature(e.target.value)}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Assignee</FormLabel>
              <Input  ref={initialRef} placeholder='Enter Assignee' value={assignee} onChange={(e)=>setassignee(e.target.value)}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSubmit} >
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}
export default AddTask;