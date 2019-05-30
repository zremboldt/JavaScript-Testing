import React, { Component } from 'react';

export default class MovieForm extends Component {
  state = {
    text: ''
  };

  render() {
    const { text } = this.state;
    const { handleSubmit } = this.props;

    return (
      <form data-testid="movie-form" onSubmit={() => handleSubmit({ text })}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
