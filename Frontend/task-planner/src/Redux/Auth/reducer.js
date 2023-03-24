import * as types from "./actionTypes"
const initState={
    token:null,
    isLoading:false,
    isError:false
}

const reducer=(state=initState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.LOGIN_ERROR:
            return {
                ...state,isLoading:false,isError:true
            }
        case types.LOGIN_LOADING:
            return{
                ...state,isLoading:true
            }
            case types.LOGIN_SUCCESS:
                return{
                    ...state,isLoading:false,token:payload
                }
                case types.REGISTER_ERROR:
                    return {
                        ...state,isLoading:false,isError:true
                    }
                case types.REGISTER_LOADING:
                    return{
                        ...state,isLoading:true
                    }
                    case types.REGISTER_SUCCESS:
                        return{
                            ...state,isLoading:false,token:payload
                        }
            default:
             return state
    }
}
export {reducer};