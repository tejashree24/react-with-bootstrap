import React,{Component} from 'react';
import {Nav,Navbar,NavItem,NavDropdown,MenuItem,Modal,Button} from 'react-bootstrap';
import SignUp from './Signup.js';
import Login from './Login.js';
import booklogo from './images/booklogo.png';
import b1 from './images/b1.jpg';

const NavStyle = {
	
}

class Navbardemo extends React.Component{
	constructor(props, context) {
	    super(props, context);

	    this.handleHide = this.handleHide.bind(this);
	    // this.handleChange = this.handleChange.bind(this);

	    this.state = {
	      show: false
	    };
	}

  	handleHide() {
    	this.setState({ signUpShow: false });
    	this.setState({ loginShow: false });
  	}

	render(){
		return(
			<div>
				<Navbar className="navbarCss">
		          <Navbar.Header>
		            <Navbar.Brand>
		            </Navbar.Brand>
		          </Navbar.Header>
		          <Nav>
		          	<NavItem eventKey={1} href="#">
		              Event
		            </NavItem>
		            <NavItem eventKey={2} href="#">
		              Catlog
		            </NavItem>
		            <NavItem eventKey={1} href="#" onClick={() => this.setState({ signUpShow: true })}>
		              Sign Up
		            </NavItem>
		             	<Modal
				          show={this.state.signUpShow}
				          onHide={this.handleHide}
				          container={this}
				          aria-labelledby="contained-modal-title"
				          dialogClassName="modal-size"
				        >
				          <Modal.Header closeButton>
				            <Modal.Title id="contained-modal-title">
				              Sign Up Here
				            </Modal.Title>
				          </Modal.Header>
				          <Modal.Body>
				            <SignUp/>
				          </Modal.Body>
				          <Modal.Footer>
				            <Button onClick={this.handleHide}>Close</Button>
				          </Modal.Footer>
				      	</Modal>
				    <NavItem eventKey={1} href="#" onClick={() => this.setState({ loginShow: true })}>
		              Log In
		            </NavItem>
		            	<Modal
				          show={this.state.loginShow}
				          onHide={this.handleHide}
				          container={this}
				          aria-labelledby="contained-modal-title"
				          dialogClassName="modal-size"
				        >
				          <Modal.Header closeButton>
				            <Modal.Title id="contained-modal-title">
				              Login Here
				            </Modal.Title>
				          </Modal.Header>
				          <Modal.Body>
				            <Login/>
				          </Modal.Body>
				          <Modal.Footer>
				            <Button onClick={this.handleHide}>Close</Button>
				          </Modal.Footer>
				      	</Modal>
		            <NavItem eventKey={2} href="#">
		              Contact Us
		            </NavItem>
		          </Nav>
		        </Navbar>
			</div>
		);
	}
}

export default Navbardemo;
		            // <NavDropdown eventKey={3} title="Categories" id="basic-nav-dropdown">
		            //   <MenuItem eventKey={3.1}>Children</MenuItem>
		            //   <MenuItem eventKey={3.2}>Study</MenuItem>
		            //   <MenuItem eventKey={3.3}>Cooking</MenuItem>
		            //   <MenuItem divider />
		            //   <MenuItem eventKey={3.4}>Fiction</MenuItem>
		            //   <MenuItem divider />
		            //   <MenuItem eventKey={3.4}>Non-Fiction</MenuItem>
		            // </NavDropdown>
		              // <img src={booklogo} style={{width: '50%', height: '50px'}}/>