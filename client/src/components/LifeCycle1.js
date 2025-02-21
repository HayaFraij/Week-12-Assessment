import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class LifeCycle1 extends Component {
  constructor() {
    super();
    this.state = {
      title: 'lifecycle 1'
    };
  }
// componentWillMount(){
//   shouldComponentUpdate(){
//     if (this.props.message === 'first'){
//       return false
//     }
//   }
// }

  shouldComponentUpdate(nextProps, nextState){
    // if (nextProps === 'first'){

    if (this.props.message === 'first'){
      return false;
    }
    if(nextState) {
      return false
    }
  }

  changeState = () => {
    this.setState({ title: 'dont update the title' });
  };

  /*
    Q4: in this component you should didnt update:
    1- the state (title) if you click on the button Change LifeCycle state
    2- the props message if it was 'first'
    
    other than this you should update (the props message if it was 'second')
  */

  render() {
    return (
      <div style={{ border: 'solid 2px red' }}>
        <h6>LifeCycle 1 Component</h6>
        <button onClick={this.changeState}>Change LifeCycle state</button>
        <p>STATE TITLE: {this.state.title}</p>
        <p>PROPS MESSAGE: {this.props.message}</p>
        {console.log(this.props.message)}
        <p>PROPS TITLE: {this.props.title}</p>
      </div>
    );
  }
}

export default LifeCycle1;

/*
  Q5: in this component you should use props type:
  1- the props message should be a string
  2- the props title should be a string and require
*/

// LifeCycle1.PropTypes = {
//   message: PropTypes.string,
//   title: PropTypes.string.isRequired
// }
