import React from 'react';
import {render} from '@testing-library/react';
import DarkMode from './index';

describe('Test for Dark Mode Component', () => {
    test('Review that component contains a Label', () => {
        // Gets one of the selectors by destructuring the return value
        const {getByText} = render(<DarkMode/>);
        expect(getByText('Dark Mode').tagName).toBe('LABEL');
    });

    test('Review that component returns what is expected', () => {
        // Gets one of the selectors by destructuring the return value
        const {getByRole} = render(<DarkMode/>);
        expect(getByRole('checkbox').type).toBe('checkbox');
    });
});
