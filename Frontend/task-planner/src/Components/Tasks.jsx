import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { normalData } from '../Redux/App/action';
import "../Styles/tasks.css"
import { useEffect } from 'react';

const Tasks = () => {
  const dispatch=useDispatch();
  const data=useSelector((state=>state.AppReducer.data))
  console.log(data)
  useEffect(() => {
    dispatch(normalData())
  }, []);
  return (
    <div>
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
            <td>{el.state?"Done":"Pending"}</td>
            <td>{el.assignee}</td>
            <td style={{backgroundColor:"red",color:"white",fontWeight:"bold"}} >Delete</td>
          </tr>
        ))}
        {/* <!-- Append all the rows here  --> */}
      </tbody>
    </table>
    </div>
  )
}

export default Tasks