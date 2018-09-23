import React, { Component } from 'react';



class DashBoardComponent extends Component {
    render() {
        // console.log(this.props._state, "DashBoardState")
        return (
            <div>
                <h1>Welcome to Dashboard</h1>
                <h1>Make Two Partitions of the dashBorad</h1>
                TODO:
                <form onSubmit={this.props.submitTodo.bind(this)}>
                <input type="text" name="todo" value={this.props._state.todo} onChange={this.props.change.bind(this)}/><br />
                <button> AddTodo </button>    
                </form>
                        <div>
                            <ul>
                                {/* {console.log(this.props,"++++++++++++")} */}
                {this.props._state.todoArray.map( (value, index)=>{
                    console.log(value, "getting valuefrom.map");
                        return (
                                <li key={index}>
                                    {value.todo} <button onClick={this.props.updateTodo.bind(this)} > ! </button><button onClick={this.props.doneTodo.bind(this)}> D </button><button onClick={this.props.deleteTodo.bind(this)} > x </button>
                                    <ul> <li>{value.createDate}</li> 
                                         <li>{value.dueDate}</li>
                                    </ul> 
                                
                                </li>
                            )
                        })}  
                        </ul>
                    </div>
            </div>
        );
    }
}

export default DashBoardComponent;