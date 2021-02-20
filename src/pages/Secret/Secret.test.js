import React from 'react';
import {render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import Secret from './index';

describe('Secret Components', () => {
    test('should take a snapshot', () => {
        const {asFragment} = render(
            <AuthProvider>
                <BrowserRouter>
                    <Secret/>
                </BrowserRouter>
            </AuthProvider>
        );
        expect(
            asFragment(
                <AuthProvider>
                    <BrowserRouter>
                        <Secret/>
                    </BrowserRouter>
                </AuthProvider>
            )
        ).toMatchSnapshot();
    });
});