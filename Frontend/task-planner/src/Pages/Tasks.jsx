import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { deleteData, getData } from '../Redux/App/action';
import "../Styles/tasks.css"
import { useEffect } from 'react';
import { useToast,Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { color } from 'framer-motion';
import Search from './Search';

const Tasks = () => {
  const toast=useToast();
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const data=useSelector((state=>state.data))

  useEffect(() => {
    dispatch(getData())
  }, []);

  const handleDelete=(id)=>{
    dispatch(deleteData(id))
    .then(()=>{
      dispatch(getData());
      toast({
        title: 'Deleted Task Successfully',
        status: "success",
        duration: 2000,
        isClosable: true,
        position:"top"
      })
    })
    .catch(()=>{
      toast({
        title: 'Something Went Wrong',
        status: "warning",
        duration: 2000,
        isClosable: true,
        position:"top"
      })
    })
  }
  return (
    <Box mt={["20%","15%","8%"]} >
        <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Bug</th>
          <th>Feature</th>
          <th>Status</th>
          <th>Assignee</th>
          <th>Edit Task</th>
          <th>Delete Task</th>
        </tr>
      </thead>
      <tbody>     
        {data&&data.length>0&&data.map((el)=>(
          <tr key={el._id} >
            <td>{el.task}</td>
            <td>{el.bug}</td>
            <td>{el.feature}</td>
            <td style={{backgroundColor:`${el.state?"green":"#ECC94B"}`,color:"white"}} >{el.state?"Done":"Pending"}</td>
            <td>{el.assignee}</td>
            <td style={{backgroundColor:"#1da1f2",color:"white",fontWeight:"bold",cursor:"pointer"}} onClick={()=>navigate(`/edit/${el._id}`)} >Edit</td>
            <td style={{backgroundColor:"red",color:"white",fontWeight:"bold",cursor:"pointer"}} onClick={()=>handleDelete(el._id)} >Delete</td>
          </tr>
        ))}
        {/* <!-- Append all the rows here  --> */}
      </tbody>
    </table>
    </Box>
  )
}

export default Tasks