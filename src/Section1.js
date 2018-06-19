import React from 'react';
import {Carousel,Grid,Row,Col} from 'react-bootstrap';
import a from './images/1.jpg';
import b from './images/2.jpg';
import c from './images/3.jpg';
import Navbardemo from './Navbardemo.js';
import books_icon from './images/books-icon.png';
import delivery_icon from './images/delivery-icon.png';
import notepad_icon from './images/notepad-icon.png';

class Section1 extends React.Component{
	render(){
		return(
			<div className="section1">
				<Navbardemo/>
			</div>
		)
	}
}

export default Section1;


	// render(){
	// 	return(
	// 		<div>
	// 			<div className="Grid">
	// 				<Row className="show-grid">
	// 				    <Col xs={12} md={8}>
	// 						 <Carousel>
	// 						  <Carousel.Item>
	// 						    <img width={900} height={500} alt="900x500" src={a} />
	// 						    <Carousel.Caption>
	// 						      <h3>First</h3>
	// 						      <p>firt img</p>
	// 						    </Carousel.Caption>
	// 						  </Carousel.Item>
	// 						  <Carousel.Item>
	// 						    <img width={900} height={500} alt="900x500" src={b} />
	// 						    <Carousel.Caption>
	// 						      <h3>Second</h3>
	// 						      <p>second img</p>
	// 						    </Carousel.Caption>
	// 						  </Carousel.Item>
	// 						  <Carousel.Item>
	// 						    <img width={900} height={500} alt="900x500" src={c} />
	// 						    <Carousel.Caption>
	// 						      <h3>Third</h3>
	// 						      <p>Third img</p>
	// 						    </Carousel.Caption>
	// 						  </Carousel.Item>
	// 						 </Carousel>
	// 				    </Col>
	// 				    <Col xs={6} md={4}>
	// 				      	<div className="box-content">
	// 				      		<ul className="media-list">
	// 				      			<li className="media">
	// 				      				<a className="pull-left" href="#">
	// 				      					<img width={50} height={50} alt="book-logo" src={books_icon}/>
	// 				      				</a>
	// 				      					<div className="media-body">
	// 				      						<h4 className="media-heading">Over 75,000 books available</h4>
	// 				      					</div>
	// 				      			</li>
	// 				      			<li className="media">
	// 				      				<a className="pull-left" href="#">
	// 				      					<img width={50} height={50} alt="book-logo" src={delivery_icon}/>
	// 				      				</a>
	// 				      					<div className="media-body">
	// 				      						<h4 className="media-heading">Free Home Delivery &amp; Pickup</h4>
	// 				      					</div>
	// 				      			</li>
	// 				      			<li className="media">
	// 				      				<a className="pull-left" href="#">
	// 				      					<img width={50} height={50} alt="book-logo" src={notepad_icon}/>
	// 				      				</a>
	// 				      					<div className="media-body">
	// 				      						<h4 className="media-heading">Available in English, Hindi, Gujarati</h4>
	// 				      					</div>
	// 				      			</li>
	// 				      		</ul>
	// 				      	</div>
	// 				    </Col>
	// 				</Row>
	// 			</div>
	// 		</div>
	// 		);
	// }
