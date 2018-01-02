import React, { Component } from 'react';
// 1a : connect component to redux
import { connect } from 'react-redux';

class Counter extends Component {
  increment() {
    // 7a: use dispatch here
    // connect injects dispatch() as a prop
    this.props.dispatch({type: "INCREMENT"})
  }

  decrement() {
    // 7b:
    this.props.dispatch({type: "DECREMENT"})
  }

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement.bind(this)}>&ndash;</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment.bind(this)}>+</button>
        </div>
      </div>
    );
  }
}

// 2b: map the state to props
const mapStateToProps = (state) => ({
  count: state.count
})

// 1b : currying
// 2b : pass it connect()
export default connect(mapStateToProps)(Counter);
