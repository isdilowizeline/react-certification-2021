import React from 'react';
import { render } from '@testing-library/react';
import Burger from './index';

describe('Test for Burger Component', () => {
  test('the Burger Component contains a button', () => {

    const open = false;
    const { getAllByRole } = render(<Burger open={open} setOpen={() => {}} />);
    expect(getAllByRole('button').length).toBe(1);
  });

  test('the Burger Component contains a onClick', () => {

    const open = false;
    const { getByRole } = render(<Burger open={open} setOpen={() => {}} />);
    expect(getByRole('button').onclick).toBeTruthy();
  });
});
