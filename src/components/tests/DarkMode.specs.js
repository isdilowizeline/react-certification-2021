import React from 'react';
import {render, screen} from '@testing-library/react';
import DarkMode from '../DarkMode';

describe('Test for Dark Mode Component', () => {
  it('Review that component returns what is expected', () => {
    // Gets one of the selectors by destructuring the return value
    const {getByText} = render(<DarkMode/>);

    expect(getByText('Hello world!').tagName).toBe('H1');
  });

  it('renders any JSX', () => {
    render(<h1>Hello world!</h1>);

    // The screen object exposes methods to query the rendered component
    expect(screen.getByText('Hello world!').tagName).toBe('H1');
  });
});
