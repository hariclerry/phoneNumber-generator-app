import React from 'react';
import { shallow } from 'enzyme';
import NumberSort from '../phoneNumberGenerator/sortNumber';

describe('NumberSort Component', () => {
  const props = {
   onChange: jest.fn(),
   phoneNumbers: []
  }
  it ('it should render the NumberSort component correctly', () => {
    const wrapper = shallow(<NumberSort {...props}/>);
    expect(wrapper).toBeTruthy();
  })
})