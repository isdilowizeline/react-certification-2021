import React from 'react';
import {render, screen} from '@testing-library/react';
import Header from './index';

describe('Test for Header Component', () => {
    test('Review that component contains ', () => {
        // Gets one of the selectors by destructuring the return value
        const {getByText} = render(<Header/>);
        expect(getByText('Dark Mode').tagName).toBe('LABEL');
    });
    test('Expect the string Dark Mode', () => {
        render(<Header/>);
        expect(screen.getByText('Dark Mode')).toBeTruthy();
    });
    test('Review that component returns what is expected', () => {
        // Gets one of the selectors by destructuring the return value
        const {getByRole} = render(<Header/>);
        expect(getByRole('checkbox').type).toBe('checkbox');
    });

    test('Review amount of button component returns what is expected', () => {
        // Gets one of the selectors by destructuring the return value
        const {getAllByRole} = render(<Header/>);
        expect(getAllByRole('button').length).toBe(2);
    });

    test('Review amount of button component returns what is expected', () => {
        // Gets one of the selectors by destructuring the return value
        const {getAllByRole} = render(<Header/>);
        expect(getAllByRole('link').length).toBe(1);
    });

    test('Review amount of button component returns what is expected', () => {
        // Gets one of the selectors by destructuring the return value
        const {getAllByRole} = render(<Header/>);
        expect(getAllByRole('textbox').length).toBe(1);
    });
});
