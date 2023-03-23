import * as types from "./actionTypes"
import axios from "axios"

const getbooksError=()=>{
    return {
        type:types.GET_BOOKS_ERROR
    }
}

const getbooksRequest=()=>{
    return {
        type:types.GET_BOOKS_REQUEST
    }
}

const getbooksSuccess=(payload)=>{
    return {
        type:types.GET_BOOKS_SUCCESS,
        payload
    }
}

const getbooks=(params)=>dispatch=>{
    console.log(params)
    dispatch(getbooksRequest());
    return axios.get("http://localhost:8080/books",params)
    .then((r)=>dispatch(getbooksSuccess(r.data)))
    .catch((e)=>dispatch(getbooksError()))
}

export {getbooks};