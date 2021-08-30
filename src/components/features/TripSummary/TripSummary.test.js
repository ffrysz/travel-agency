import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from '../TripSummary/TripSummary.js';

describe('Component TripSummary', () => {

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render correct image', () => {
    const expectedImageAlt = 'name';
    const expectedImageSrc = 'imagesssss.jpg';
    const component = shallow(<TripSummary image={expectedImageSrc} name={expectedImageAlt} cost='120' days={2} tags={['raz']} />);

    expect(component.find('img').prop('src')).toEqual(expectedImageSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedImageAlt);
  });

  it('should render correct link', () => {
    const testId = 'abc';
    const expectedLink = `/trip/${testId}`;
    const component = shallow(<TripSummary id={testId} image='image.jpg' name='testName' cost='120' days={2} tags={['raz']} />);

    expect(component.find('Link').prop('to')).toEqual(expectedLink);
  });

  it('should render correct name', () => {
    const testName = 'abc';
    const testDays = 12;
    const testCost = '123';
    const component = shallow(<TripSummary id='testId' image='image.jpg' name={testName} cost={testCost} days={testDays} tags={['raz']} />);

    expect(component.find('.title').text()).toContain(testName);
    // console.log(component.find('.title').text());
    expect(component.find('.details').childAt(0).text()).toContain(testDays);
    expect(component.find('.details').childAt(1).text()).toContain(testCost);
  });

  it('should render correct tags', () => {
    const testTags = ['abc', 'xyz', '123'];
    const component = shallow(<TripSummary id='testId' image='image.jpg' name='testName' cost='testCost' days={2} tags={testTags} />);

    // expect(component.find('.tag').text()).toContain(testName);
    expect(component.find('.tag').at(0).text()).toContain(testTags[0]);
    expect(component.find('.tag').at(1).text()).toContain(testTags[1]);
    expect(component.find('.tag').at(2).text()).toContain(testTags[2]);
  });

  it('should not render div without tags array', () => {
    const testTags = [];
    const component = shallow(<TripSummary id='testId' image='image.jpg' name='testName' cost='testCost' days={2} tags={testTags} />);

    // expect(component.find('.tag').text()).toContain(testName);
    expect(component.find('.tags').text()).toBeFalsy();
  });
});