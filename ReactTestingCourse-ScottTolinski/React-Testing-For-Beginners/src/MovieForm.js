import React, { Component } from 'react';

export default class MovieForm extends Component {
  render() {
    return (
      <form data-testid="movie-form">
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
