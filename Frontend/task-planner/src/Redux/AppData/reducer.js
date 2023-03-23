import React from 'react'
import * as types from "./actionTypes"

const initialState={
  books:[],
  isLoading:false,
  isError:false
}

const reducer = (oldState=initialState,action) => {
  const {type,payload}=action;
    switch(type){
      case types.GET_BOOKS_ERROR:
        return{
          ...oldState,isError:true,isLoading:false
        }
      case types.GET_BOOKS_REQUEST:
        return{
          ...oldState,isLoading:true
        }
      case types.GET_BOOKS_SUCCESS:
        return{
          ...oldState,isLoading:false,books:payload
        }

      default:
        return oldState;
    }
}

export default reducer