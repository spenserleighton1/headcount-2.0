import React from 'react';
import CardContainer from './index.js'
import { shallow } from 'enzyme';
import Card from '../Card'

describe('CardContainer', () => {
  let wrapper;
  let mockData;

  beforeEach(() => {
    mockData = { COLORADO: 
         { location: 'COLORADO',
           stats: 
            { '2004': 0.24,
              '2005': 0.278,
              '2006': 0.337,
              '2007': 0.395,
              '2008': 0.536,
              '2009': 0.598,
              '2010': 0.64,
              '2011': 0.672,
              '2012': 0.695,
              '2013': 0.703,
              '2014': 0.741 } },
        'ACADEMY 20': 
         { location: 'ACADEMY 20',
           stats: 
            { '2004': 0.302,
              '2005': 0.267,
              '2006': 0.354,
              '2007': 0.392,
              '2008': 0.385,
              '2009': 0.39,
              '2010': 0.436,
              '2011': 0.489,
              '2012': 0.479,
              '2013': 0.488,
              '2014': 0.49 }} }


  wrapper = shallow(<CardContainer data={ mockData } />)

  })
  it('matches the Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render the correct amount of cards', () => {
    expect(wrapper.find(Card).length).toEqual(2)
  })

})