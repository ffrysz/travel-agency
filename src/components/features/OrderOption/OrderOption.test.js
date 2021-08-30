import React from 'react';
import { shallow } from 'enzyme';
import OrderOption from './OrderOption.js';

describe('Component OrderOption', () => {

  it('should render without errors', () => {
    const component = shallow(<OrderOption type='xyz' name='abc' />);

    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('should render correct name', () => {
    const testName = 'correctName';
    const component = shallow(<OrderOption name={testName} type='text' />);
    expect(component.find('.title').text()).toEqual(testName);
  });
});