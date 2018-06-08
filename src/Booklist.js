
import React,{Component} from 'react';
// import './customers.css';
// import b1 from "./images/b1.jpg";

const dInline = {
    display: "inline-block",
    margin: "10px",
    padding: "10px"
};

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
	
	render(){
		const {booklist} = this.state;
		return(
			<div>
				<ul>
					{
						this.state.booklist.map( books => {
							return (
								<li key={`${books.id}`} style={dInline}>
									<img src={require(`${books.b_img}`)} alt={books.b_name} height={200} width={150}/>
								</li>
								)
							}

						)
					}
				</ul>				
			</div>
		);
	}
}

export default Booklist;


//give pagination to image tag
//and define filter to book caption 
// focus on two different things TodoApp and BookList 
//main focus on search filter
