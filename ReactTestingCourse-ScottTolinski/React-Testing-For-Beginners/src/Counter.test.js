import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Counter from './Counter';

afterEach(cleanup);

test('<Counter />', () => {
  const { debug, getByTestId } = render(<Counter />);
  const counterButton = getByTestId('counter-button');

  // outputs Counter dom element in the terminal
  // debug();

  // Assert that counter-button is a button
  expect(counterButton.tagName).toBe('BUTTON');
  // Assert that counter-button starts at 0
  expect(counterButton.textContent).toBe('0');

  // fireEvent lets you simulate an event occuring in the DOM.
  fireEvent.click(counterButton);
  expect(counterButton.textContent).toBe('1');

  fireEvent.click(counterButton);
  expect(counterButton.textContent).toBe('2');

  // outputs current Counter dom element in the terminal
  // debug();
});
