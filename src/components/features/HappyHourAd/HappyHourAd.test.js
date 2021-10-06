import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd.js';

const select = {
  title: '.title',
  countdown: '.countdown',
  promoDescription: '.promoDescription',
};

const mockProps = {
  title: 'Lets explore',
  promoDescription: 'Happy Hour',
};
describe('Component HappyHourAd', () => {

  it('should render without errors', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });
  it('should render without errors', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });
  it('should render correct title', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);
    expect(component.find(select.title).text()).toEqual(mockProps.title);
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

const checkCountdownAtTime = (time, expectedCountdown) => {

  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.countdown).text();
    expect(renderedTime).toEqual(expectedCountdown);

    global.Date = trueDate;
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  checkCountdownAtTime('11:57:58', '122');
  checkCountdownAtTime('11:59:59', '1');
  checkCountdownAtTime('13:00:00', 23 * 60 * 60 + '');
});