import ActionTypes from '../constant/index.js';


const initialState = {
        user: {},
        authUser: {},
        isLoading: false,
        isError: false,
        error: {},
        isLoggedIn: false,
    }

export default function authReducer (state = initialState, action)  {
    switch (action.type) {

        case ActionTypes.SIGNUP_SUCCESS: {
            return ({
                ...state,
                isError: false,
                user : action.payload
            })
        } 
        case ActionTypes.SIGNUP_FAILURE: {
            return ({
                ...state,
                isError: true,
                error : action.payload
            })
        } 
        case ActionTypes.SIGNIN_SUCCESS: {
            return ({
                ...state,
                isError: false,
                user : action.payload
            })
        } 
        case ActionTypes.SIGNIN_FAILURE: {
            return ({
                ...state,
                isError: true,
                error : action.payload
            })
        } 
        // case ActionTypes.WRITTEN_SUCCESS: {
        //     return ({
        //         ...state,
        //         isError: false,
        //     })
        // }
        // case ActionTypes.WRITTEN_ERROR: {
        //     return ({
        //         ...state,
        //         isError: true,
        //         error : action.payload

        //     })
        // }
        case ActionTypes.ERROR: {
            return ({
                ...state,
                isError : true,
                error : action.payload
            })
        }
        default:
            return state
    }

}




// import {
//     SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE,
//     SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE,
//     LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE
// } from '../constants'
// const initialState = {
//     user: {},
//     authUser: {},
//     isLoading: false,
//     isError: false,
//     error: {},
//     isLoggedIn: false,
// }

// export default function authReducer(state = initialState, action) {
//     switch (action.type) {
//         case SIGNUP:
//             return {
//                 ...state,
//                 authUser: {},
//                 user: {},
//                 isLoading: true,
//                 isError: false,
//                 error: {},
//                 isLoggedIn: false,
//             }
//         case SIGNUP_SUCCESS:
//             return {
//                 ...state,
//                 authUser: action.payload,
//                 isLoading: false,
//             }
//         case SIGNUP_FAILURE:
//             return {
//                 ...state,
//                 isLoading: false,
//                 isError: true,
//                 error: action.error
//             }
//         case SIGNIN:
//             return {
//                 ...state,
//                 user: {},
//                 authUser: {},
//                 isLoading: true,
//                 isError: false,
//                 error: {},
//                 isLoggedIn: false,
//             }
//         case SIGNIN_SUCCESS:
//             return {
//                 ...state,
//                 user: action.payload,
//                 authUser: action.payload,
//                 isLoading: false,
//                 isLoggedIn: true,
//             }
//         case SIGNIN_FAILURE:
//             return {
//                 ...state,
//                 isLoading: false,
//                 isError: true,
//                 error: action.error
//             }
//         case LOGOUT:
//             return {
//                 ...state,
//                 isLoading: true
//             }
//         case LOGOUT_SUCCESS:
//             return {
//                 ...state,
//                 authUser: {},
//                 user: {},
//                 isLoading: false,
//                 isError: false,
//                 error: {},
//                 isLoggedIn: false,
//             }
//         case LOGOUT_FAILURE:
//             return {
//                 ...state,
//                 isLoading: false,
//                 isError: true,
//                 error: action.error
//             }
//         default:
//             return state
//     }
// }