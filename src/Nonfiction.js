
import React,{Component} from 'react';
// import './customers.css';
// import b1 from "./images/b1.jpg";

const dInline = {
    display: "inline-block",
    margin: "10px",
    padding: "10px"
};

const captionStyle ={
    display: "inline-block",
    fontSize: '17px',
    textAlign: 'center',
    backgroundColor: '#b2ad8d',
    color: 'antiquewhite',
}

function searchingFor(term){
    return function(x){
    return x.b_name.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class Nonfiction extends React.Component{
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
		fetch('http://localhost:5000/nonfiction')
		.then(response => response.json())
		.then(response => this.setState({booklist:response.data}))
		.catch(err=> console.error(err))
	}
	
	render(){
		return(
			<div>
				<ul>
					{
						this.state.booklist.filter(searchingFor(this.props.filterContent)).map( books => {
							return (
								<li key={`${books.id}`} style={dInline}>
									<div style={captionStyle}>
										<img src={require(`${books.b_img}`)} alt={books.b_name} height={200} width={150}/>
										<h4>{books.b_name}</h4>
									</div>
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

export default Nonfiction;


//give pagination to image tag
//and define filter to book caption 
// focus on two different things TodoApp and BookList 
//main focus on search filter
