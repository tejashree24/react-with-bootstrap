import React from 'react';
import booklist from './gridgallery.js';

const dInline = {
    display: "inline-block",
    margin: "10px"
};

const captionStyle ={
    display: "inline-block",
    margin: "10px",
    padding: '10px',
    fontSize: '17px',
    textAlign: 'center',
    backgroundColor: '#b2ad8d',
    color: 'antiquewhite'
}

function searchingFor(term){
    return function(x){
    return x.bookCaption.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}


class TodoApp extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          todos: booklist,
          currentPage: 1,
          todosPerPage: 3
        };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }

      render() {
        const { todos, currentPage, todosPerPage } = this.state;

        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.filter(searchingFor(this.props.filterContent)).map((todo, index) => {
          return <li key={index} style={dInline}>
                    <img src={todo.src} alt={todo.bookCaption} height={200} width={150}/>
                          <h5>{todo.bookCaption}
                          </h5>
                  </li>;
        });


        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }
 
        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <li style={captionStyle}
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