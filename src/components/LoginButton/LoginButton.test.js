import React from 'react';
import { render } from '@testing-library/react';
import LoginButton from './index';

describe('Test for LoginButton Component', () => {
  test('Review that component contains button', () => {
    // Gets one of the selectors by destructuring the return value
    const { getAllByRole } = render(<LoginButton />);
    expect(getAllByRole('button').length).toBe(1);
  });
  test('Review that component contains menu', () => {
    // Gets one of the selectors by destructuring the return value
    const { getByText } = render(<LoginButton />);
    expect(getByText('Login').tagName).toBe('BUTTON');
  });
});
