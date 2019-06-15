import React from 'react';
import { shallow } from 'enzyme';
import DownloadPhoneNumbers from '../phoneNumberGenerator/download';

describe('DownloadPhoneNumbers Component', () => {
  it ('it should render the DownloadPhoneNumbers component correctly', () => {
    const wrapper = shallow(<DownloadPhoneNumbers />);
    expect(wrapper).toBeTruthy();
  })
})