import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FireActions } from "../../store/actions/index";
import { DashBoardComponent } from './../../components/index';

class DashBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            todo:"",
            todoArray: [],
            createDate:"",
            dueDate : "",
            selectedTodoID : "",
            selectedTodoIndex : "",
            selectedTodoValue : "",
            updatedTodo : "",
            isTodoUpdate : false ,
            isTodoPandingList: true,
            isTodoDoneList:false,
            reRender : false,


        }
    }
    componentWillMount(){
        console.log("componentWillMount", this.props)
        this.props.getData()
        this.reRender()
    }
    componentWillUpdate(nextProps, nextState) {
        // console.log(nextProps, "componentWillUpdateProps")
        // console.log(nextState, "componentWillUpdateStates")
        
      }
    
    reRender(){
        console.log("reRender", this.props)
    }
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.fireObj.todo,"inTheNextProps");
        let previousTodo = [];
        previousTodo = nextProps.fireObj.todo;
        this.setState({
            todoArray : previousTodo
        })
        
    };
   
    onchangeValue(e){
        this.setState({[e.target.name]:e.target.value})
    }

    todoSubmitHander = (ev) => {
        ev.preventDefault();
        let allTodo = [];
        allTodo = this.state.todoArray;
        let todoObj = {
            todo:this.state.todo,
            createDate : new Date().toDateString() + " " + new Date().toLocaleTimeString(),
            dueDate : "12:10:2018",
        }
        allTodo.push(todoObj);
        this.props.addTodo(todoObj);
        this.setState({
            todoArray: allTodo,
            todo:"",
            createDate:"",
            dueDate : ""
        })
    }

    todoDeleteHandler(){
        console.log('deleting Todo');
    }
    todoDoneHandler(){
        console.log('Done Work Todo');
    }
    todoUpdateHandler(){
        console.log('Update Todo');
    }


    render() {
        // console.log("loginContainerState",this.state.todoArray);
        return (
            <div>
        { ( this.state.todoArray != null)? 
        <DashBoardComponent submitTodo={this.todoSubmitHander} deleteTodo={this.todoDeleteHandler} updateTodo={this.todoUpdateHandler} doneTodo={this.todoDoneHandler} _state={this.state} change={this.onchangeValue.bind(this)}/>
        :
        null
        }
        </div>
        );
    
}

}

const mapStateToProps = (state) => {
    return { 
        // authObj: state.AuthReducer,
        fireObj: state.fire
     };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todoObj) => dispatch(FireActions.submitTodoToDB(todoObj)),
        getData: () => dispatch(FireActions.beforeComponentMount())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);