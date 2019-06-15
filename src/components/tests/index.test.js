import React from 'react';
import { shallow } from 'enzyme';
import Generator from '../phoneNumberGenerator/index';

describe('Generator Component', () => {
  it ('it should render the Generator component correctly', () => {
    const wrapper = shallow(<Generator />);
    expect(wrapper).toBeTruthy();
  })
})