import React from 'react';
import {render} from '@testing-library/react';
import {GlobalStyles} from './global';
import {ThemeProvider} from "styled-components";
import {theme} from './theme';

describe('Root File Test', () => {
    test('should take a snapshot', () => {
        const {asFragment} = render(
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
            </ThemeProvider>
        );
        expect(
            asFragment(
                <ThemeProvider theme={theme}>
                    <GlobalStyles/>
                </ThemeProvider>
            )
        ).toMatchSnapshot();
    });
});