import React, { Component } from 'react';
import history from "../History";



class SigninComponent extends Component {
    
    render() {
        return (
            <div style={{"width" : "800px", "marginLeft" : "400px", "marginTop" : "60px"}}>
                <h1>Welcome Back</h1>
                <form onSubmit={this.props.submit.bind(this)} >
                Email:
                <input type="email" name="email" className="form-control col-md-5" value={this.props.loginState.email} onChange={this.props.change.bind(this)} required /><br />
                Password:
                <input type="password" name="password" className="form-control col-md-5" title="password must consist on 6 charecters" value={this.props.loginState.password} onChange={this.props.change.bind(this)} required />
                <small style={{"fontSize":"3px;"}}>password must consist at lest 6 charecters</small><br/><br/>
                <p> Don't have account <span onClick={() => { history.push('/signup') }}>Signup</span></p>
                <button className="btn btn-primary">
                    Login 
                </button>
                </form>
            </div>
        );
    }
}

export default SigninComponent;