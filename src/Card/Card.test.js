import React from 'react';
import Card from './index.js';
import { shallow } from 'enzyme';

describe('Card', () => {
  let wrapper;
  let mockData;

  beforeEach(() => {
    mockData = {
             '2004': 0.24,
              '2005': 0.278,
              '2006': 0.337,
              '2007': 0.395,
              '2008': 0.536,
              '2009': 0.598,
              '2010': 0.64,
              '2011': 0.672,
              '2012': 0.695,
              '2013': 0.703,
              '2014': 0.741 }

    wrapper = shallow(<Card location={ 'COLORADO' }
                            stats={ mockData } />)
  })

  it('matches the Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render the correct html', () => {
    //shallow render a card 
    //compare rendered to card with expected card
  })

  it('should render the correct number of html elements', () => {
    //shallow render a card 
    //compare number of rendered elements to card with expected number of elements
  })

  it('should call a method onClick', () => {
    //shallow render a card 
    //compare rendered to card with expected card
  })
})