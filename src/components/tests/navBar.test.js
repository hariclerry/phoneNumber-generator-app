import React from 'react';
import { shallow } from 'enzyme';
import NavBAR from '../commons/navBar';

describe('NavBAR Component', () => {
  it ('it should render the SignUp component correctly', () => {
    const wrapper = shallow(<NavBAR />);
    expect(wrapper).toBeTruthy();
  })
})