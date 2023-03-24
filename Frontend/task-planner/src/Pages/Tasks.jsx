import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { deleteData, getData } from '../Redux/App/action';
import "../Styles/tasks.css"
import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

const Tasks = () => {
  const toast=useToast();
  const dispatch=useDispatch();
  const data=useSelector((state=>state.AppReducer.data))
  console.log(data)
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
    <div style={{marginTop:"8%"}} >
        <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Bug</th>
          <th>Feature</th>
          <th>Status</th>
          <th>Assignee</th>
          <th>Delete Task</th>
        </tr>
      </thead>
      <tbody>     
        {data&&data.length>0&&data.map((el)=>(
          <tr key={el._id} >
            <td>{el.task}</td>
            <td>{el.bug}</td>
            <td>{el.feature}</td>
            <td >{el.state?"Done":"Pending"}<br/><button>Change Status</button></td>
            <td>{el.assignee}</td>
            <td style={{backgroundColor:"red",color:"white",fontWeight:"bold",cursor:"pointer"}} onClick={()=>handleDelete(el._id)} >Delete</td>
          </tr>
        ))}
        {/* <!-- Append all the rows here  --> */}
      </tbody>
    </table>
    </div>
  )
}

export default Tasks