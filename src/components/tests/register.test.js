import React from 'react';
import { shallow } from 'enzyme';
import SignUp from '../user/register';

describe('SignUp Component', () => {
  it ('it should render the SignUp component correctly', () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper).toBeTruthy();
  })
})