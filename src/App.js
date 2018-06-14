import React, { Component } from 'react';
import './App.css';
// import './array_try.css';
import {Nav,Navbar,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import Navbardemo from './Navbardemo.js';
import Section1 from './Section1.js';
import Section2 from './Section2.js';
// import TodoApp from './array_try.js';
import TodoApp from './TodoApp.js';
// import Booklist from './Booklist.js';



class App extends Component{
render() {
    return (
            <div class="container-fluid">
                <Navbardemo/>
                    <Section1/>
                <div class="section2-data">
                    <Section2/>
                </div>
                <div>
                     <TodoApp/>
                </div>
            </div>
        );
    }
}
export default App;



          //
