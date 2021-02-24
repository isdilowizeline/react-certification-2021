import React from 'react';
import {render} from '@testing-library/react';
import AuthProvider from '../../providers/Auth';
import Layout from '.';

describe('Layout Components', () => {
    it('should take a snapshot', () => {
        const {asFragment} = render(
            <AuthProvider>
                <Layout/>
            </AuthProvider>
        );
        expect(
            asFragment(
                <AuthProvider>
                    <Layout/>
                </AuthProvider>
            )
        ).toMatchSnapshot();
    });
});
