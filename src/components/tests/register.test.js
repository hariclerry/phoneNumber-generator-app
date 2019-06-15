import React from 'react';
import { shallow } from 'enzyme';
import SignUp from '../user/register';

describe('SignUp Component', () => {
  it('it should render the SignUp component correctly', () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper).toBeTruthy();
  });

  it('should call handleChange', () => {
    const event = {
      target: {
        value: 'gdhhr9'
      }
    };
    const wrapper = shallow(<SignUp />);
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
    const wrapper = shallow(<SignUp {...props}/>);
    const spy = jest.spyOn(wrapper.instance(), 'handleFormSubmit');
    wrapper.instance().handleFormSubmit();
    expect(spy).toHaveBeenCalled();
  });
});
