import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import * as actions from '../../store/actions';
import { Link,Router,Redirect } from 'react-router-dom';
import { formatDate, fileUpload } from '../../utils';

import {
	Container,
	Button,
	Heading,
	LoginWrapper,
	MessageBox,
}
from './style';

class Login extends Component{
	state={
		controls: {
			username:'',
			password:''
		},
		isLoggedIn:false,
	}
	handleChange=(e,type)=>{
		const data = [];
		data[type] = e.target.value;
		const controls = {...this.state.controls, ...data};
		this.setState({controls});
	}
	loginUser=async ()=>{
		const { loginWithUser } = this.props;
		const userdata= this.state.controls;
		await loginWithUser(userdata);
	}
	
	render(){
		const { auth, loading, errorLogin } = this.props;
		let redirectUrl =''; 
		if(auth && auth.token!==null){
			redirectUrl=<Redirect to='/news' />	
		}
		return(
			<Container>
				{redirectUrl}	
				<LoginWrapper>	
				{ errorLogin ? <MessageBox>{errorLogin}</MessageBox> : ''}
				<Heading>Admin Login</Heading>
				<div>
					<label>Username</label>
					<input type="text"
					 name="username" 
					 onChange={(e)=>this.handleChange(e, 'username')}
					  value={this.state.controls.username} />
				</div>
				<div>
					<label>Password</label>
					<input type="password"
					 name="password"
					  onChange={(e)=>this.handleChange(e, 'password')} 
					  value={this.state.controls.password} />
				</div>
				<div>
					<Button onClick={()=>this.loginUser()}> Login </Button>
				</div>
				</LoginWrapper>
			</Container>
		);
	}
}

const mapStateToProps = state => {
  return {
    auth: state.auth.authdata,
    loading: state.auth.loading,
    errorLogin: state.auth.errorLogin
  };
};

const mapDispatchToProps = dispatch => {	
  return {
    loginWithUser: ( userdata ) => dispatch(actions.userLogin(userdata)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);