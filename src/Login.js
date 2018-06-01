import React,{Component} from 'react';
import {FormGroup,FormControl,ControlLabel} from 'react-bootstrap';

class Login extends React.Component{
	constructor(props, context) {
		super(props, context);

		this.state = {
	  	value: ''
	    };

		// this.handleChange = this.handleChange.bind(this);
  	}

	render(){
		return(
			<form>
				<FormGroup>
					<ControlLabel>Email</ControlLabel>
					<FormControl
					 	type="text"
					 	value={this.state.value}
					 	placeholder="Email"
					 	onChange={this.handleChange}
					 	>
					</FormControl>
					<br/>
					<ControlLabel>Password</ControlLabel>
					<FormControl
					 	type="text"
					 	value={this.state.value}
					 	placeholder="Password"
					 	onChange={this.handleChange}
					 	>
					</FormControl>
				</FormGroup>
			</form>
			);
	}

}

export default Login;