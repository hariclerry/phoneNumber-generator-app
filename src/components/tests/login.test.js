import React from 'react';
import { shallow } from 'enzyme';
import Login from '../user/login';

describe('Login Component', () => {
  it ('it should render the Login component correctly', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toBeTruthy();
  })

  it('should call handleChange', () => {
    const event = {
      target: {
        value: 'gdhhr9'
      }
    };
    const wrapper = shallow(<Login />);
    const spy = jest.spyOn(wrapper.instance(), 'handleChange');
    wrapper.instance().handleChange(event);
    expect(spy).toHaveBeenCalled();
  });

  it('should call handleFormSubmit', () => {
    const props = {
      history: {
        push: jest.fn()
      }
    }
    const wrapper = shallow(<Login {...props}/>);
    const spy = jest.spyOn(wrapper.instance(), 'handleFormSubmit');
    wrapper.instance().handleFormSubmit();
    expect(spy).toHaveBeenCalled();
  });
})