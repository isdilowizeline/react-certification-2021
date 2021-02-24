import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import NotFound from './index';

describe('NotFound Components', () => {
  test('should take a snapshot', () => {
    const { asFragment } = render(
      <AuthProvider>
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      </AuthProvider>
    );
    expect(
      asFragment(
        <AuthProvider>
          <NotFound />
        </AuthProvider>
      )
    ).toMatchSnapshot();
  });
});
