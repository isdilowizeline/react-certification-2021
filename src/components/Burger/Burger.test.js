import React from 'react';
import {render} from '@testing-library/react';
import Burger from './index';

describe('Test for Burger Component', () => {
    test('Review that component contains a button', () => {
        // Gets one of the selectors by destructuring the return value
        const open = false;
        const setOpen = false;
        const {getAllByRole} = render(<Burger open={open} setOpen={() => {
        }}/>);
        expect(getAllByRole('button').length).toBe(1);
    });

    test('Review that Button contains a onClick', () => {
        // Gets one of the selectors by destructuring the return value
        const open = false;
        const setOpen = false;
        const {getByRole} = render(<Burger open={open} setOpen={() => {
        }}/>);
        expect(getByRole('button').onclick).toBeTruthy();
    });
});
