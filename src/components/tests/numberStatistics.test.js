import React from 'react';
import { shallow } from 'enzyme';
import Header from '../phoneNumberGenerator/numberStatistics';

describe('Header Component', () => {
  const props = {
    min: 3, 
    max: 5, 
    total: 6,
    phoneNumbers: []
   }
  it ('it should render the Header component correctly', () => {
    const wrapper = shallow(<Header {...props}/>);
    expect(wrapper).toBeTruthy();
  })
})