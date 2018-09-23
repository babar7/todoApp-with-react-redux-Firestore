import ActionTypes from '../constant/index.js';
import * as firebase from 'firebase';
// import config from '../../config/firebaseConfig'; 
// firebase.initializeApp(config);


// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

export default class FireActions {
    static beforeComponentMount(){
        return dispatch => {
            let currentUserUid = localStorage.getItem("currentUserUid");
            db.collection('todo').doc(currentUserUid).collection('panding').get()
            .then( (doc) => {
                let pandingTodoIds = [];
                let todoArray = [];
                doc.docs.map( (val, ind) => {
                    pandingTodoIds.push(val.id);
                    db.collection('todo').doc(currentUserUid).collection('panding').doc(val.id).get()
                    .then( snap => {
                        todoArray.push(snap.data());
                        // console.log(todoArray, "afterpushinginarry")
                        // dispatch({ type : ActionTypes.GET_TODO_SUCCESS , payload : todoArray })
                    })
                    .catch( error => {
                        console.log("Error getting document:", error);
                    })
                })
                // console.log(pandingTodoIds, " todoidsarry")
                dispatch({ type : ActionTypes.GET_TODO_SUCCESS , payload : todoArray })
                // console.log(todoArray, "afterpushinginarry")

                // if (doc.docs[0].exists) {
                //     console.log("Document data:", doc);
                //    // let todos = doc.data().todos ;
                //     //putting todos in a array
                //     // var todoArray = [];
                //     // for(var key in todos) {
                //     // todoArray.push(todos[key]);
                           
                //     // }
                // } else {
                //     // doc.data() will be undefined in this case
                //     console.log("No such document!");
                // }
            })
            .catch( (error) => {
                console.log("Error getting document:", error);
            })
        }
    }
    static submitTodoToDB (todoObj) {
        return dispatch => {
            let currentUserUid = localStorage.getItem("currentUserUid");
            console.log(currentUserUid, "currentUserUid");
            db.collection("todo").doc(currentUserUid).collection("panding").add(todoObj)
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef);
                dispatch ({type : ActionTypes.TODO_ADD_SUCCESS, payload : docRef})
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            }); 
        }

    }

}






// import {
//     FIRE_SIGNUP, FIRE_SIGNUP_SUCCESS, FIRE_SIGNUP_FAILURE,
//     FIRE_LOGIN, FIRE_LOGIN_SUCCESS, FIRE_LOGIN_FAILURE,
//     LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE
// } from '../constants'

// export default class FireActions {

//     static signup(user) {
//         return {
//             type: FIRE_SIGNUP,
//             payload: user
//         }
//     }

//     static signupSuccess(data) {
//         return {
//             type: FIRE_SIGNUP_SUCCESS,
//             payload: data
//         }
//     }

//     static signupFailure(error) {
//         return {
//             type: FIRE_SIGNUP_FAILURE,
//             error: error
//         }
//     }

//     static signin(user) {
//         return {
//             type: FIRE_LOGIN,
//             payload: user
//         }
//     }

//     static signinSuccess(data) {
//         return {
//             type: FIRE_LOGIN_SUCCESS,
//             payload: data
//         }
//     }

//     static signinFailure(error) {
//         return {
//             type: FIRE_LOGIN_FAILURE,
//             error: error
//         }
//     }

//     static logout() {
//         return {
//             type: LOGOUT
//         }
//     }

//     static logoutSuccess() {
//         return {
//             type: LOGOUT_SUCCESS
//         }
//     }

//     static logoutFailure(error) {
//         return {
//             type: LOGOUT_FAILURE,
//             error: error
//         }
//     }
// }