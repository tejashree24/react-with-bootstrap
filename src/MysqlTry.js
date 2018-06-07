
import React,{Component} from 'react';
// import './customers.css';
// import b1 from "./images/b1.jpg";

class Booklist extends React.Component{
	constructor(){
		super();
		this.state ={
			booklist: []	
		};
	}

	componentDidMount(){
		this.getBooks();
	}

	getBooks = _ => {
		fetch('http://localhost:5000/booklist')
		.then(response => response.json())
		.then(response => this.setState({booklist:response.data}))
		.catch(err=> console.error(err))
	}

	renderCustomer = ({id,b_name,b_img}) => 
		<div key={id}>
			<h5>Id: {id} Name: {b_name} </h5>
			<img src={require(`${b_img}`)} height={50} width={50}/>
		</div>

	
	render(){
		const {booklist} = this.state;
		return(
			<div>
				<h3> Booklist Details </h3>
					{booklist.map(this.renderCustomer)}
			</div>
		);
	}
}

export default Booklist;
