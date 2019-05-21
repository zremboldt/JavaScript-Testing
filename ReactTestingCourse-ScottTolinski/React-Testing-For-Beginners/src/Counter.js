import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <button data-testid="counter-button">{this.state.count}</button>
      </div>
    );
  }
}
