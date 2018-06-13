import React from 'react';
import {Tabs,Tab,Row,Col,Nav,NavItem,Pagination,Carousel,ControlLabel,FormControl,Form,FormGroup,Button} from 'react-bootstrap';
import Signup from './Signup.js';
import Gallary from 'react-grid-gallery';
import booklist from './gridgallery.js';
// import IMAGES from './gridgallery.js';
import IMAGES1 from './gridgallery1.js';
import IMAGES2 from './gridgallery2.js';
import TodoApp from './TodoApp.js';
import Booklist from './Booklist.js';

const styles = {
	display: 'inline-block',
	marginLeft: '16px',
	marginRight: '16px'
};

const captionStyle ={
	padding: '10px',
    fontSize: '17px',
    textAlign: 'center',
    backgroundColor: '#b2ad8d',
    color: 'antiquewhite'
}

const gridStyle = {
	padding:'10px'
}

class Section2 extends React.Component{

	constructor(){
		super();
		this.state = {
			books: booklist,
			term : ''
		};

		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(event){
		this.setState({
			term: event.target.value
		});
	}

	render(){
		return(
			<div>
				<Tab.Container id="left-tabs-example" defaultActiveKey="first">
					<div className="Container">
						<div className="grid">
							<Row className="show-grid" style={gridStyle}>
								<Col md={6}>
									<Nav bsStyle="pills">
							        <NavItem eventKey="first">
							        	<a href="#">Story</a>
							        </NavItem>
							        <NavItem eventKey="second">
							        	<a href="#">Fiction</a>
							        </NavItem>
							        <NavItem eventKey="third">
							        	<a href="#">Non Fiction</a>
							        </NavItem>
							      </Nav>
							    </Col>
								<Col md={6}>
									<Form inline>
										<FormGroup>
											<ControlLabel> Search Book </ControlLabel>{"   "}
											<FormControl
												type="text"
												placeholder="Enter Book"
												onChange={this.handleSearch}
											/>{"   "}
											<Button type="submit">Search
											</Button>
										</FormGroup>
									</Form>
								</Col>
							</Row>
						</div>
					    <Tab.Content animation>
					        <Tab.Pane eventKey="first">
	 								<Booklist filterContent={this.state.term}/>
					        </Tab.Pane>
					        <Tab.Pane eventKey="second">
					        		<Booklist filterContent={this.state.term}/>
					        </Tab.Pane>
					        <Tab.Pane eventKey="third">
					        		<Booklist filterContent={this.state.term}/>
					        </Tab.Pane>
					    </Tab.Content>  
					</div>
				</Tab.Container>
			</div>
		);
	}
}

export default Section2;
									  

									// <TodoApp filterContent={this.state.term}/>


// <Carousel>
// <Carousel.Item>
//   <Gallary images={IMAGES} margin={35}/>
//   <Carousel.Caption>
//     <h3>First</h3>
//     <p>firt img</p>
//   </Carousel.Caption>
// </Carousel.Item>
// <Carousel.Item>
//   <Gallary images={IMAGES1} margin={35}/>
//   <Carousel.Caption>
//     <h3>Second</h3>
//     <p>second img</p>
//   </Carousel.Caption>
// </Carousel.Item>
// <Carousel.Item>
//   <Gallary images={IMAGES2} margin={35}/>
//   <Carousel.Caption>
//     <h3>Third</h3>
//     <p>Third img</p>
//   </Carousel.Caption>
// </Carousel.Item>
// // </Carousel>

	 									// {
	 									// 	this.state.books.filter(searchingFor(this.state.term)).map(books=>(

									  //   <li style={styles} key={books.id}>
									  //    <img src={books.src} alt={books.bookCaption} height={200} width={150}/>
									  //    <h5 style={captionStyle}>{books.bookCaption}</h5>
									  //   </li>

									  //   ))
	 									// }
	
