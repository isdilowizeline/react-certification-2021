import React from 'react';
import {render} from '@testing-library/react';
import VideoCard from './index';

describe('Test for VideoCard Component', () => {
  test('Review that component contains img', () => {
    // Gets one of the selectors by destructuring the return value
    const {getAllByRole} = render(<VideoCard/>);
    expect(getAllByRole('img').length).toBe(1);
  });
});
