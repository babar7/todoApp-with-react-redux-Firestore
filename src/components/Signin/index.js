import React, { Component } from 'react';
import history from "../../History";



class SigninComponent extends Component {
    
    render() {
        // console.log(this.props, "Signcomponent props ")
        return (
            <div>
                <h1>Login/Signin screen</h1>
                <form onSubmit={this.props.submit.bind(this)} >
                Email:
                <input type="email" name="email" value={this.props.loginState.email} onChange={this.props.change.bind(this)} required /><br />
                Password:
                <input type="password" name="password" title="password must consist on 6 charecters" value={this.props.loginState.password} onChange={this.props.change.bind(this)} required /><br />
                <small>password must consist at lest 6 charecters</small>
                <p> Don't have account <span onClick={() => { history.push('/signup') }}>Signup</span></p>
                <button>
                    Login 
                </button>
                </form>
            </div>
        );
    }
}

export default SigninComponent;