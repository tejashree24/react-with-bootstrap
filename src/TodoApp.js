import React from 'react';
// import booklist from './gridgallery.js';
// import Booklist from './Booklist.js';

const dInline = {
    display: "inline-block",
    margin: "10px",
    padding: "10px",
    backgroundColor: "#b2ad8d",
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


class TodoApp extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          booklist: [],
          currentPage: 1,
          todosPerPage: 3
        };
        this.handleClick = this.handleClick.bind(this);
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

      handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }

      render() {

        const { booklist, currentPage, todosPerPage } = this.state;

        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = booklist.slice(indexOfFirstTodo, indexOfLastTodo);
        const renderTodos = currentTodos.map((books) => {
          return (
                <li style={dInline}>
                  <div style={captionStyle}>
                    <img src={require(`${books.b_img}`)} alt={books.b_name} height={200} width={150}/>
                    <h4>{books.b_name}</h4>
                  </div>
                </li>
            )
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(booklist.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }
        
        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <li style={dInline}
              key={number}
              id={number}
              onClick={this.handleClick}
            >
                {number}
            </li>
          );
        });

        return (
          <div>
            <ul>
              {renderTodos}
            </ul>
            <ul id="page-numbers" >
                {renderPageNumbers}
            </ul>
          </div>
        );
      }
    }

    export default TodoApp;