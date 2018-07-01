import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import DistrictRepository from './helper.js'
import kinderData from './data/kindergartners_in_full_day_program.js';


describe('app', () => {
  let renderedApp;
  let mockData;
  let district = new DistrictRepository(kinderData);

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

    renderedApp = shallow(renderedApp=(<App />));
  })

  it('should exist', () => {
    expect(renderedApp).toBeDefined()
  });

  it('should match the snapshot', () => {
    expect(renderedApp).toMatchSnapshot()
  }) 

  it('should have the correct default state', () => {
    let expected = {
      districtData: district.dataCleaner(kinderData),
      comparedDistricts: {}
    }
    let actual = renderedApp.state();
    expect(actual).toEqual(expected)
  })

  it('should add an object for each district', () => {
      renderedApp.setState({
        districtData: district.dataCleaner(kinderData),
        comparedDistricts: {}, 
      })
      let expected = 181;
      let actual = Object.keys(district.dataCleaner(kinderData)).length
      expect(actual).toEqual(expected);
  })

  it('when comparing cards, should render the original cards, the selected cards, and a comparison card', () => {
    let selectedCards = { data: { 'COLORADO': 
         { location: 'COLORADO',
           selected: true,
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
           selected: true,
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
              '2014': 0.49 } } 
            } 
         }
      let renderedApp setState =({
        districtData: district.dataCleaner(kinderData),
        comparedDistricts: { selectedCards }, 
      })
      let expected = 183;
      let actual = let actual = 
  })

  it('should only add two selected cards', () => {

  })

  it('should remove a card from the unselected cards list when clicked once', () => {

  })

  it('should remove a card from the selected cards list when clicked twice', () => {

  })

  it('should add a comparison card when clicked twice', () => {

  })

  it('should remove a card from the selected cards list when clicked twice', () => {

  })
})