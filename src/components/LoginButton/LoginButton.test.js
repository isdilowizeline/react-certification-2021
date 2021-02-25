import React from 'react';
import { render } from '@testing-library/react';
import LoginButton from './index';

describe('Test for LoginButton Component', () => {
  test('Review that component contains button', () => {

    const { getAllByRole } = render(<LoginButton />);
    expect(getAllByRole('button').length).toBe(1);
  });
  test('Review that component contains menu', () => {

    const { getByText } = render(<LoginButton />);
    expect(getByText('Login').tagName).toBe('BUTTON');
  });
});
