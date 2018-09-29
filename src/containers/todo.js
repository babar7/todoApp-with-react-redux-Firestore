import React from 'react';
import { connect } from 'react-redux'
import { TodoComponent } from '../components/todo';
import { FireActions } from '../store/actions/index';

class TodoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo:"",
            allTodos:[],
            isEdit:false,
            updatedTodo:""
        }
       this.props.viewTwo(this.props.authReducer.user.uid);

    }
    componentDidMount(){
    //    this.props.viewTwo();
    console.log(this.props, "componentDidMount")
    // setTimeout(()=>{
    //    console.log(this.props.fireReducer, "componentDidMount")
    //    this.setState({
    //        allTodos : this.props.fireReducer.todo
    //    })
    //     }, 12000)
    }
    componentWillReceiveProps(nextProps){
            console.log(nextProps, "NextProps")
            if(nextProps.fireReducer.todo !== null){
                this.setState({
                    allTodos : this.props.fireReducer.todo
                })
                console.log("done")
            }

    }

    onChangeEvent(e){
        this.setState({[e.target.name]:e.target.value})
    }

    addItem(){
        if(this.state.todo.trim() !== ""){
            let todoObj = {
                todo:this.state.todo.trim(),
                createDate : new Date().toDateString() + " " + new Date().toLocaleTimeString(),
                dueDate : "12:10:2018",
            }
            this.props.addBtn(todoObj)
            let previousTodos = []
            previousTodos = this.props.fireReducer.todo
            previousTodos.push(todoObj)
            this.setState({todo:""})
        }
        else
        {
            alert("Please write some value");
            this.setState({todo:""})

        }

    }
    deleteItem(key , ind){
        console.log("key",key , ind)
        this.props.deleteBtn(key, ind)
        this.deleteSuccess()
    }
    deleteSuccess(){
        this.setState({allTodos : this.props.fireReducer.todo})
    }
    editItem(key){
        console.log("edit KEy",key)
        this.props.editBtn(key);
    }

    saveEditbtn(id,index){
        if(this.state.updatedTodo.trim() != ""){
            console.log(this.state.updatedTodo)
            console.log(id,index)
            let value ={
                todo:this.state.updatedTodo.trim(),
                isEdit:this.state.isEdit
            }
            this.props.saveEdit(id,value,index)
            this.setState({updatedTodo:""})
            this.props.viewTwo();
        }
        else{
            alert("please write some value");
        }
        
    }
    closeEditItem(id){
        this.props.closeEditbtn(id);
    }
    render() {
        
        return (
            <div>
                <TodoComponent _addBtn={this.addItem.bind(this)} _onChangeEvent={this.onChangeEvent.bind(this)}
                _reducerState={this.props.fireReducer}
                 _componentState={this.state}  
                _deleteItem={this.deleteItem.bind(this)} _editItem={this.editItem.bind(this)}
                _saveEditValue={this.saveEditbtn.bind(this)} _closeEdit={this.closeEditItem.bind(this)}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    // console.log()
    return({
        authReducer : state.auth,
        fireReducer: state.fire
    })
}
function mapDispatchToProps(dispatch){
    return({
        addBtn: (data)=>{dispatch(FireActions.submitTodoToDB(data))},
        deleteBtn: (id)=>{dispatch(FireActions.deleteTodo(id))},
        editBtn: (id)=>{dispatch(FireActions.editTodo(id))},
        saveEdit: (id, value, index) => {dispatch(FireActions.saveEditTodo(id, value, index))},
        closeEditbtn : (id) => {dispatch(FireActions.closeEdit(id))},
        viewTwo : (currentUser)=>{dispatch(FireActions.viewTodo(currentUser))}
        
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoContainer);
// export default connect(
//     state =>(
//         {
//             todoState:state.fireReducer
//         }
//     ),
//     {viewTodo,addTodo,deleteTodo,editTodo,saveEditTodo,closeEdit}
// )(TodoContainer)