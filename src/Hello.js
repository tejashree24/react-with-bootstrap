import React from 'react';

class Child extends Component {
 getAlert() {
    alert('clicked');
 }
 render() {
  return (
    <h1 ref="hello">Hello</h1>
  );
 }
}


export default Child;