import React from 'react';
import { shallow } from 'enzyme';
import DisplayNumbers from '../phoneNumberGenerator/displayNumbers';

describe('DisplayNumbers Component', () => {
  const props = {
    onChange: jest.fn(),
    phoneNumbers: []
   }
  it ('it should render the DisplayNumbers component correctly', () => {
    const wrapper = shallow(<DisplayNumbers {...props}/>);
    expect(wrapper).toBeTruthy();
  })
})