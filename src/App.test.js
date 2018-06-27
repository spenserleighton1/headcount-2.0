import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('app', () => {
  let wrapper;
  beforeEach(() => {
    wrapper=shallow(<App />)
  })
  it('should have an districtData object in state', () => {
    const expectedState = {};
    const actualState = wrapper.state('districtData')

    expect(actualState).to
  })
})