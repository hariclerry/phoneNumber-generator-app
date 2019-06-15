import React from 'react';
import { shallow } from 'enzyme';
import NumberInput from '../phoneNumberGenerator/numberInput';

describe('NumberInput Component', () => {
  const props = {
    onChange: jest.fn(),
    onClick: jest.fn()
   }
  it ('it should render the NumberInput component correctly', () => {
    const wrapper = shallow(<NumberInput {...props}/>);
    expect(wrapper).toBeTruthy();
  })
})