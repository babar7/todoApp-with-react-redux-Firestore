import ActionTypes from '../constant/index.js';


const initialState = {
        user: {},
        todo : [],
        authUser: {},
        isLoading: false,
        isError: false,
        error: {},
        isLoggedIn: false,
    }

export default function fireReducer (state = initialState, action)  {
    switch (action.type) {

        case ActionTypes.WRITTEN_SUCCESS: {
            return ({
                ...state,
                isError: false,
            })
        }
        case ActionTypes.WRITTEN_ERROR: {
            return ({
                ...state,
                isError: true,
                error : action.payload

            })
        }
        case ActionTypes.GET_TODO_SUCCESS: {
            return ({
                ...state,
                isError: false,
                todo : action.payload

            })
        }
        case ActionTypes.ADD_TODO: {
            return {
                ...state 
            }
        }
        default:
            return state
    }

}

// import {
//     FIRE_SIGNUP, FIRE_SIGNUP_SUCCESS, FIRE_SIGNUP_FAILURE,
//     FIRE_LOGIN, FIRE_LOGIN_SUCCESS, FIRE_LOGIN_FAILURE,
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

// export default function fireReducer (state = initialState, action)  {
//     switch (action.type) {
//         case FIRE_SIGNUP:
//             return {
//                 ...state,
//                 authUser: {},
//                 user: {},
//                 isLoading: true,
//                 isError: false,
//                 error: {},
//                 isLoggedIn: false,
//             }
//         case FIRE_SIGNUP_SUCCESS:
//         console.log("reducer----",action.payload);
//             return {
//                 ...state,
//                 authUser: action.payload,
//                 isLoading: false,
//             }
//         case FIRE_SIGNUP_FAILURE:
//             return {
//                 ...state,
//                 isLoading: false,
//                 isError: true,
//                 error: action.error
//             }
//         case FIRE_LOGIN:
//             return {
//                 ...state,
//                 user: {},
//                 authUser: {},
//                 isLoading: true,
//                 isError: false,
//                 error: {},
//                 isLoggedIn: false,
//             }
//         case FIRE_LOGIN_SUCCESS:
//             return {
//                 ...state,
//                 user: action.payload,
//                 authUser: action.payload,
//                 isLoading: false,
//                 isLoggedIn: true,
//             }
//         case FIRE_LOGIN_FAILURE:
//             return {
//                 ...state,
//                 isLoading: false,
//                 isError: true,
//                 error: action.payload
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