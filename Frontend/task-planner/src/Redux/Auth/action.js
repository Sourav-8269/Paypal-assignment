import * as types from "./actionTypes";

const loginRequest=()=>{
    return {
        type:types.LOGIN_LOADING
    }
}

const loginSuccess=(token)=>{
    return {
        type:types.LOGIN_SUCCESS,
        payload:token
    }
}

const loginError=()=>{
    return {
        type:types.LOGIN_ERROR
    }
}

const RegisterRequest=()=>{
    return {
        type:types.LOGIN_LOADING
    }
}

const RegisterSuccess=(token)=>{
    console.log(token)
    return {
        type:types.LOGIN_SUCCESS,
        payload:token
    }
}

const RegisterError=()=>{
    return {
        type:types.LOGIN_ERROR
    }
}

export {loginError,loginRequest,loginSuccess,RegisterError,RegisterRequest,RegisterSuccess}