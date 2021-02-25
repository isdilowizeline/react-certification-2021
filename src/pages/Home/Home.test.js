import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import Home from './index';

describe('Home Components', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(
      <AuthProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </AuthProvider>
    );
    expect(
      asFragment(
        <AuthProvider>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </AuthProvider>
      )
    ).toMatchSnapshot();
  });

  it('Display img', () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </AuthProvider>
    );
    expect(screen.getAllByRole('img')).toBeTruthy();
  });
});
