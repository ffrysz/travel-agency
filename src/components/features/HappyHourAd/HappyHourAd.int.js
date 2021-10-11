import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd.js';

const select = {
  title: '.title',
  countdown: '.countdown',
};

const mockProps = {
  title: 'Lets explore',
  promoDescription: 'Happy Hour',
};

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

const checkCountdownAtTime = (time, expectedCountdown) => {

  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.countdown).text();
    expect(renderedTime).toEqual(expectedCountdown);

    global.Date = trueDate;
  });
};

const checkCountdownAfterTime = (time, delay, expectedCountdown) => {

  it(`should show correct value ${delay} seconds after ${time}`, () => {
    jest.useFakeTimers();
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);
    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + delay);
    global.Date = mockDate(newTime.getTime());

    jest.advanceTimersByTime(delay * 1000);

    const renderedTime = component.find(select.countdown).text();
    expect(renderedTime).toEqual(expectedCountdown);

    global.Date = trueDate;
    jest.useRealTimers();
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  checkCountdownAtTime('11:57:58', '122');
  checkCountdownAtTime('11:59:59', '1');
  checkCountdownAtTime('13:00:00', 23 * 60 * 60 + '');
});
describe('Component HappyHourAd after delay', () => {
  checkCountdownAfterTime('11:57:58', 2, '120');
  checkCountdownAfterTime('11:59:58', 1, '1');
  checkCountdownAfterTime('13:00:00', 60 * 60, 22 * 60 * 60 + '');
});