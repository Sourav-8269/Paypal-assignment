import { useDispatch } from "react-redux";
import * as types from "./actionTypes";
import axios from "axios";

const getRequest=()=>{
    return {
        type:types.GET_REQUEST
    }
}

const getSuccess=(token)=>{
    return {
        type:types.GET_SUCCESS,
        payload:token
    }
}

const getError=()=>{
    return {
        type:types.GET_ERROR
    }
}

const PostRequest=()=>{
    return {
        type:types.POST_REQUEST
    }
}

const PostSuccess=()=>{
    return {
        type:types.POST_SUCCESS,
    }
}

const PostError=()=>{
    return {
        type:types.POST_ERROR
    }
}

const updateRequest=()=>{
    return {
        type:types.UPDATE_REQUEST
    }
}

const updateSuccess=()=>{
    return {
        type:types.UPDATE_SUCCESS,
    }
}

const updateError=()=>{
    return {
        type:types.UPDATE_ERROR
    }
}
// Get request
const getData=()=>(dispatch)=>{
    dispatch(getRequest())
    axios.get(`http://localhost:8080/tasks`)
    .then((res)=>{
        console.log(res)
        dispatch(getSuccess(res.data))
    })
    .catch((err)=>dispatch(getError()))
}

// Adding Data

const addData=(payload)=>(dispatch)=>{
    dispatch(PostRequest())
    return axios.post(`http://localhost:8080/tasks/add`,payload)
    .then((res)=>{
        console.log(res.data);
        dispatch(PostSuccess())
    })
    .catch((err)=>dispatch(PostError()))
}

const deleteData=(id)=>(dispatch)=>{
    dispatch(getRequest());
    return axios.delete(`http://localhost:8080/tasks/delete/${id}`)
    .then((res)=>{
        console.log(res)
        // alert("Task Deleted")
    })
    .catch((err)=>dispatch(getError()))
}

const updateData=(id,payload)=>(dispatch)=>{
    dispatch(updateRequest());
    return axios.patch(`http://localhost:8080/tasks/edit/${id}`,payload)
    .then((res)=>{
        dispatch(updateSuccess());
        // alert("Task Deleted")
    })
    .catch((err)=>dispatch(updateError()))
}

// const getData=(page)=>(dispatch)=>{
//     dispatch(getRequest())
//     axios.get(`https://mock-server-app-2-3le7.onrender.com/companies?_limit=2&_page=${page}`)
//     .then((res)=>{
//         // console.log(res)
//         dispatch(getSuccess(res.data))
//     })
//     .catch((err)=>dispatch(getError()))
// }

const filterData=(type)=>(dispatch)=>{
    dispatch(getRequest())
    axios.get(`https://mock-server-app-2-3le7.onrender.com/companies?company_type=${type}`)
    .then((res)=>{
        // console.log(res)
        dispatch(getSuccess(res.data))
    })
    .catch((err)=>dispatch(getError()))
}

const SortData=(sort)=>(dispatch)=>{
    dispatch(getRequest())
    axios.get(`https://mock-server-app-2-3le7.onrender.com/companies?_sort=cost_per_share&_order=${sort}`)
    .then((res)=>{
        // console.log(res)
        dispatch(getSuccess(res.data))
    })
    .catch((err)=>dispatch(getError()))
}

export {getData,deleteData,addData,updateData}