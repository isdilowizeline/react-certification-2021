import React from 'react';
import {render} from '@testing-library/react';
import AuthProvider from '../../providers/Auth';
import Fortune from '../Fortune';

describe('Fortune Components', () => {
    it('should take a snapshot', () => {
        const {asFragment} = render(
            <AuthProvider>
                <Fortune/>
            </AuthProvider>
        );
        expect(
            asFragment(
                <AuthProvider>
                    <Fortune/>
                </AuthProvider>
            )
        ).toMatchSnapshot();
    });
});