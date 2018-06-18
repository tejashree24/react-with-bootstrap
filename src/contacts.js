import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import bgimg from './images/bookBG.png';

const bg={
	margin:"10px 0px",
	padding:"20px",
	minHeight: "225px",	
	background: `url(${bgimg}) left bottom repeat-x rgb(149, 139, 120)`,
	height: "191px",
	color: "#fff"
}

class Contact extends React.Component{
	render(){
		return(
			<div style={bg}>
				<Grid>
					<Row className="show-grid" >
						<Col sm={3} smOffset={1}>
							<h2> Contact Us</h2>
							+91-22-67595901-99 (Mumbai)
							<br/>
							+91-9769995016 (Pune)
							<br/>
							+91-9731672583 (Bangalore)
						</Col>
						<Col sm={3} smOffset={1}>
							About Us
							<br/>
							Feedback
							<br/>
							FAQs
							<br/>
							Contact Us
							<br/>
							Terms of Use
						</Col>
						<Col sm={3} smOffset={1}>
							Gift Membership
							<br/>
							Tell a friend
							<br/>
							Request a book
							<br/>
							Book DOnation
							<br/>
							Privacy Policy
						</Col>
					</Row>
				</Grid>
			</div>
			);
	}
}

export default Contact;