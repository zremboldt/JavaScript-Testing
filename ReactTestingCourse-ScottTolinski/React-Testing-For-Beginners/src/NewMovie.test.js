import React from 'react';
import { render, cleanup } from 'react-testing-library';
import NewMovie from './NewMovie';

afterEach(cleanup);

test('<NewMovie />', () => {
  const { debug, getByTestId, queryByTestId } = render(<NewMovie />);

  debug();

  expect(getByTestId('page-title').textContent).toBe('New Movie');

  // we're expecting the movie-form component to exist.
  // getBy and queryBy give us different results if the component isn't there.
  expect(queryByTestId('movie-form')).toBeTruthy();
});
