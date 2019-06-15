import React from 'react';
import { shallow } from 'enzyme';
import Login from '../user/login';

describe('Login Component', () => {
  it ('it should render the Login component correctly', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toBeTruthy();
  })

  // it('should call toggledrawer onclick', () => {
  //   const spy = sinon.fake(jest.fn);
  //   const props = {
  //     handleClick: spy
  //   }
  //   const wrapper = shallow(<CustomButton {...props} />);
  //   expect(wrapper.find('Button').at(0).simulate('click'));
  //   expect(wrapper).toBeTruthy();
  // })
})