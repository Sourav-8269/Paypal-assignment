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

const PostSuccess=(token)=>{
    return {
        type:types.POST_SUCCESS,
        payload:token
    }
}

const PostError=()=>{
    return {
        type:types.POST_ERROR
    }
}

const normalData=()=>(dispatch)=>{
    dispatch(getRequest())
    axios.get(`http://localhost:8080/tasks`)
    .then((res)=>{
        console.log(res)
        dispatch(getSuccess(res.data))
    })
    .catch((err)=>dispatch(getError()))
}

const getData=(page)=>(dispatch)=>{
    dispatch(getRequest())
    axios.get(`https://mock-server-app-2-3le7.onrender.com/companies?_limit=2&_page=${page}`)
    .then((res)=>{
        // console.log(res)
        dispatch(getSuccess(res.data))
    })
    .catch((err)=>dispatch(getError()))
}

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

export {getError,getRequest,getSuccess,PostError,PostRequest,PostSuccess,getData,filterData,SortData,normalData}