import React from 'react';
import { shallow } from 'enzyme';
import MainNav from '../commons/nav';

describe('MainNav Component', () => {
  it ('it should render the SignUp component correctly', () => {
    const wrapper = shallow(<MainNav />);
    expect(wrapper).toBeTruthy();
  })
})