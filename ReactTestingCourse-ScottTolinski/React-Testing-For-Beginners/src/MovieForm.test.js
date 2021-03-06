import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import MovieForm from './MovieForm';

afterEach(cleanup);

const onSubmit = jest.fn();

test('<MovieForm />', () => {
  const { queryByTestId, getByText, getByLabelText } = render(
    <MovieForm handleSubmit={onSubmit} />
  );

  // debug();

  // we're expecting the movie-form component to exist.
  // getBy and queryBy give us different results if the component isn't there.
  expect(queryByTestId('movie-form')).toBeTruthy();

  // console.log(container.firstChild);

  fireEvent.change(getByLabelText('Text'), {
    target: { value: 'hello' }
  });

  fireEvent.click(getByText('Submit'));
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({ text: 'hello' });
});
