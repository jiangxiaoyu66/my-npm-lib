import React from 'react';
import ReactDOM from 'react-dom';

export default class HelloReact extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return( <div>Hello React</div>);
  }
}

ReactDOM.render(<HelloReact />, document.getElementById('root'));
