import React from 'react';
import {render, screen} from '@testing-library/react';
import AuthProvider from '../../providers/Auth';
import Login from './index';

describe('Login Components', () => {
    test('User name input is present', () => {
        render(
            <AuthProvider>
                {' '}
                <Login/>
            </AuthProvider>
        );
        expect(screen.getAllByRole('textbox').length).toBe(1);
    });

    test('H1 tag is present', () => {
        render(
            <AuthProvider>
                <Login/>
            </AuthProvider>
        );
        expect(screen.getByText('Welcome back!')).toBeTruthy();
    });

    test('should take a snapshot', () => {
        const {asFragment} = render(
            <AuthProvider>
                <Login/>
            </AuthProvider>
        );
        expect(
            asFragment(
                <AuthProvider>
                    <Login/>
                </AuthProvider>
            )
        ).toMatchSnapshot();
    });
});
