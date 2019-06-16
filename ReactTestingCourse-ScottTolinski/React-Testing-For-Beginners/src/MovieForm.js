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
        <label htmlFor="text">
          Text
          <input type="text" id="text" onChange={e => this.setState({ text: e.target.value })} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
