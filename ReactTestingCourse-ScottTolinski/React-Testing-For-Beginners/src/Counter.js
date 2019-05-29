import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: 0,
  };

  handleCount = () => {
    // This is now the recommended way to update state. Use prevState.
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <button data-testid="counter-button" onClick={this.handleCount}>
          {this.state.count}
        </button>
      </div>
    );
  }
}
