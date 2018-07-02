import React from 'react';
import Search from './index.js';
import { shallow } from 'enzyme';


describe('Search', () => {
  let wrapper;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    wrapper = shallow(<Search findDistrict={ mockFn } />);
  });

  it('should render a text input field', () => {
    expect(wrapper.find('form')).toHaveLength(1);
  });

  it('calls handleChange when the input changes', () => {
    const mockEvent = { target: { value: 'COLORADO' } };
    wrapper.instance().handleChange(mockEvent);
    expect(mockFn).toHaveBeenCalledWith('COLORADO');
  });

  
});