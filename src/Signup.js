import React, {Component} from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';
import validator from 'validator';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      lastname: {value:'',isValid:true,message:''},
      firstname: {value:'',isValid:true, message: ''},
      email: {value: '', isValid: true, message: ''},
      password: {value: '', isValid: true, message: ''},
      confirmPassword: {value: '', isValid: true, message: ''}
    };
  }

  onChange = (e) => {
    var state = this.state;
    state[e.target.name].value = e.target.value;

    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.resetValidationStates(); //reset states before the validation procedure is run.
    if (this.formIsValid()) { //run the validation, and if it's good move on.
      //form processing here....
    }
  }

  formIsValid = () => {
  	// console.log("Email",state.email.value);
    var state = this.state;

    if(validator.isEmpty(state.firstname.value)){
      state.firstname.isValid = false;
      state.firstname.message = 'Enter Firstname';

      this.setState(state);
      return false;
    }

    if(validator.isInt(state.firstname.value)){
      state.firstname.isValid = false;
      state.firstname.message = 'Enter letters Only';

      this.setState(state);
      return false;
    }

    if(validator.isEmpty(state.lastname.value)){
      state.lastname.isValid = false;
      state.lastname.message = 'Enter lastname';

      this.setState(state);
      return false;
    }

    if(validator.isInt(state.lastname.value)){
      state.lastname.isValid = false;
      state.lastname.message = 'Enter letters Only';

      this.setState(state);
      return false;
    }

    if (!validator.isEmail(state.email.value)) {
      state.email.isValid = false;
      state.email.message = 'Not a valid email address';

      this.setState(state);
      return false;
    }

    if(validator.isLength(state.password.value.length)>=5){
    	state.password.isValid = false;
    	state.password.message = "Not a valid password";

    	this.setState(state);
    	return false;
    }

    if(!((state.password.value)===(state.confirmPassword.value))){
    	state.confirmPassword.isValid = false;
    	state.confirmPassword.message = "Password Does not match!";

    	this.setState(state);
    	return false;
    }

    return true;
  }

  resetValidationStates = () => {
    var state = this.state;

    Object.keys(state).map(key => {
      if (state[key].hasOwnProperty('isValid')) {
        state[key].isValid = true;
        state[key].message = '';
      }
    });
    this.setState(state);
  }

  render() {
    var {firstname,lastname, email, password, confirmPassword} = this.state;

    var firstnameGroupClass = classNames('form-group',{'has-error': !firstname.isValid});
    var lastnameGroupClass = classNames('form-group',{'has-error':!lastname.isValid});
    var emailGroupClass = classNames('form-group', {'has-error': !email.isValid});
    var passwordGroupClass = classNames('form-group', {'has-error': !password.isValid});
    var confirmGroupClass = classNames('form-group', {'has-error': !confirmPassword.isValid});

    return (
      <div className="">
        		<form className="form-signin" onSubmit={this.onSubmit}>
		          <h5 className="form-signin-heading">Sign Up Here</h5>

		          <div className={firstnameGroupClass}>
		            <input type="text" name="firstname" className="form-control"
		              placeholder="Enter Firstname" value={firstname.value} onChange={this.onChange}  autofocus/>
		            <span className="help-block">{firstname.message}</span>
		          </div>

		          <div className={lastnameGroupClass}>
		            <input type="text" name="lastname" className="form-control"
		              placeholder="Enter Lastname" value={lastname.value} onChange={this.onChange}  />
		            <span className="help-block">{lastname.message}</span>
		          </div>

		          <div className={emailGroupClass}>
		            <input type="email" name="email" className="form-control"
		              placeholder="Email address" value={email.value} onChange={this.onChange}  />
		            <span className="help-block">{email.message}</span>
		          </div>

		          <div className={passwordGroupClass}>
		            <input type="password" name="password" className="form-control"
		              placeholder="Password" value={password.value} onChange={this.onChange} />
		            <span className="help-block">{password.message}</span>
		          </div>

		          <div className={confirmGroupClass}>
		            <input type="password" name="confirmPassword" className="form-control"
		              placeholder="Confirm Password" value={confirmPassword.value} onChange={this.onChange} />
		            <span className="help-block">{confirmPassword.message}</span>
		          </div>

		          <button className="btn btn-lg btn-primary btn-block" type="submit">Create Account</button>
		        </form>
      </div>
    );
  }
};

export default SignUp;


	// submit(){
	// 	//validation for firstname
	// 	if(this.state.firstname === ""){
 //      		alert('Enter your firstname');
 //      	}
	//     else if(!this.state.firstname.match(/^[a-zA-Z]+$/)){
	//       	alert('Only Letters');
	//     }
	//     else if(this.state.firstname.length < 5){
	//          alert('Name Should be greater than 5 Character');
	//     }

	//     //validation for lastname
	//     if(this.state.lastname === ""){
	//       alert('Enter your lastname');
	//     }

	//     else if(!this.state.lastname.match(/^[a-zA-Z]+$/)){
	//       alert('only Letters');
	//     }

	//     //validation for Email
	//     if(this.state.email === ""){
	//       alert('enter your email')
	//     }
	//     else if(!this.state.email.match('@')){
	//       alert('incorrect email');
	//     }

	//     //Validation for Password
	//     if(this.state.password === ""){
	//       alert('enter your password');
	//     }
	//     else if(this.state.password.length<6){
	//       alert('Password should be greater than 5 character');
	//     }
		
	// }