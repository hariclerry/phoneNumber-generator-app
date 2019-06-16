import React from 'react';
import { shallow } from 'enzyme';
import Generator from '../phoneNumberGenerator/index';

describe('Generator Component', () => {
  let instance;
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Generator />);
    instance = wrapper.instance();
  });
  it ('it should render the Generator component correctly', () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.length).toEqual(1)
  })

  it('should set error to true when limit is exceeded', () => {
    window.alert = jest.fn();
    const event = {
      preventDefault: () => {},
    };
    wrapper.setState({ limit: 50000 });
    instance.handleGenerateNumber(event);
    const state = wrapper.state();
    expect(state.limit).toEqual(50000);
    expect(state.error).toBe(true);
    window.alert.mockClear();
  });

  it('should call handleGenerateNumber', () => {
    const event = {
      preventDefault: () => {},
    };
    wrapper.setState({ limit: 10 });
    instance.handleGenerateNumber(event);
    const state = wrapper.state();
    expect(state.limit).toEqual(10);
    expect(state.error).toBe(false);
    expect(state.phoneNumbers.length).toBeGreaterThan(1)
  });

  it('should call handleNumberSort', () => {
    wrapper.setState({ sorter: 'desc', phoneNumbers: ['0478895994', '0590084938'] });
    instance.handleNumberSort();
    const state = wrapper.state();
    expect(state.phoneNumbers.length).toBeGreaterThan(1);
    expect(state.sorter).toBe('desc');
  });

  it('should call handleOnSortChange', () => {
    wrapper.setState({ phoneNumbers: ['0478895994', '0590084938'] });
    const event = {
      preventDefault: () => {},
      target: {
        value: 'asc'
      }
    };
    let spy;
    spy = jest.spyOn(instance, 'handleOnSortChange');
    instance.handleOnSortChange(event);
    const state = wrapper.state();
    expect(state.sorter).toBe('asc');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('should call handleGenerateNumber', () => {
    const event = {
      preventDefault: () => {},
    };
    wrapper.setState({ limit: 20 });
    instance.handleGenerateNumber(event);
    const state = wrapper.state();
    expect(state.total).toBe(20);
    expect(state.min).toBeDefined();
    expect(state.max).toBeDefined();
  });

  it('should call handleUserInput', async () => {
    const event = {
      preventDefault: () => {},
      target: {
        value: 10
      }
    };
    await instance.handleUserInput(event);
    const state = wrapper.state();
    expect(state.limit).toBe(10);
  });

  it('should call handleUserInput and not change set limit', async () => {
    const event = {
      preventDefault: () => {},
      target: {
        value: 'false'
      }
    };
    await instance.handleUserInput(event);
    const state = wrapper.state();
    expect(state.limit).toBe(1);
  });
})