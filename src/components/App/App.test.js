import React from 'react';
import { render } from '@testing-library/react';
import App from './index';

describe('Test for App Component', () => {
  test('Review that component contains a header', () => {
    const { getByText } = render(<App />);
    expect(getByText('Dark Mode').tagName).toBe('LABEL');
  });
  test('Review that Button contains a onClick', () => {
    const { getAllByRole } = render(<App />);
    expect(getAllByRole('button').length).toBe(2);
  });
  test('Review that component contains link from videos', () => {

    const { getAllByRole } = render(<App />);
    expect(getAllByRole('link').length).toBe(25);
    expect(getAllByRole('textbox').length).toBe(1);
  });
});
