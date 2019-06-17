import React from 'react';
import { render, cleanup } from 'react-testing-library';
import MovieDetail from './MovieDetail';

global.fetch = require('jest-fetch-mock');

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

const match = {
  params: {
    id: 'gfldskllkkl'
  }
};

console.error = jest.fn();

test('<MovieDetail />', () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      movie: {
        id: 'hi',
        title: 'Badger Badger Badger...'
      }
    })
  );
  const { debug } = render(<MovieDetail match={match} />);
  debug();
});
