import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer.js';

describe('Component DaysToSummer', () => {

  it('should render without errors', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });
});

const trueDate = Date;

const mockDate = customDate => class extends Date {
  constructor(...args) {
    if (args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now() {
    return (new Date(customDate)).getTime();
  }
};

const checkCountdownAtDate = (date, expectedCountdown) => {

  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}T14:21:00.135Z`);

    const component = shallow(<DaysToSummer />);
    const renderedTime = component.find('.title').text();
    expect(renderedTime).toEqual(expectedCountdown);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkCountdownAtDate('2021-05-21', '31 days to summer.');
  checkCountdownAtDate('2021-06-23', '');
  checkCountdownAtDate('2021-06-20', '1 day to summer!');
  checkCountdownAtDate('2021-12-20', '183 days to summer.');
});