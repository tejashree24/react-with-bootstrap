import React from 'react';

class Foo extends React.Component{
	state = {foo: false}
	  toggle() {
	    this.setState({
	      foo: !this.state.foo
	    });
	  }
	  render() {
	    return (
	      <div>
	        Foo Triggered: {this.state.foo.toString()}
	      </div>
	    );
	  }
}

export default Foo;