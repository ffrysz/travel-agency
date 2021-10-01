import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd.js';

describe('Component HappyHourAd', () => {

  it('should render without errors', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });
});