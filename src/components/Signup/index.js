import React, { Component } from 'react';

class SignupComponent extends Component {
    render() {
        console.log(this.props.signupState,"SignupState")
        return (
            <div>
                <h1>This is signup Component</h1>
                <form onSubmit={this.props.submit.bind(this)}> 
                Username:
                <input type="text" name="userName" placeholder="username" value={this.props.signupState.userName}  onChange={this.props.change.bind(this)} required /><br/>
                Email:
                <input type="email" name="email" placeholder="email" value={this.props.signupState.email}  onChange={this.props.change.bind(this)} required /><br />
                Password:
                <input type="password" name="password" placeholder="password" value={this.props.signupState.password}  onChange={this.props.change.bind(this)} required /> <br />

                <button>SignUp</button>
                </form>
            </div>
        );
    }
}

export default SignupComponent;