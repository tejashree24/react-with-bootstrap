import React from 'react';
import Button from './button';
import Foo from './foo';

const styles = {
  	fontFamily: 'sans-serif',
  	textAlign: 'center',
};

class Parent extends React.Component {
triggerFoo() {
	this.foo.toggle();
}

render() {
    return (
	      	<div>
	        	<Foo ref={foo => this.foo = foo} />
	        	<Button onClick={this.triggerFoo.bind(this)}/>
	      	</div>
    	);  
  	}
}

export default Parent;