import React from 'react';
import { render } from '@testing-library/react';
import Search from './index';

describe('Test for Search Component', () => {
  test('Review that component contains button', () => {

    const { getAllByRole } = render(<Search />);
    expect(getAllByRole('textbox').length).toBe(1);
  });
  test('Review that component contains INPUT placeholder Search', () => {

    const { getByPlaceholderText } = render(<Search />);
    expect(getByPlaceholderText('Search').tagName).toBe('INPUT');
  });
});
