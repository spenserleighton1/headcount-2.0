import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('app', () => {
  let wrapper;
  beforeEach(() => {
    wrapper=shallow(<App />)
  })

  it('should match the snapshot', () => {
  }) 

  it('should have the correct default state', () => {
  })

  it('should have the correct components', () => {
  })

  it('when comparing cards, should render the original cards, the selected cards, and a comparison card', () => {
  })

  it('should have the correct default state', () => {
  })

  it('should only add two selected cards', () => {
  })

  it('should remove a card from the unselected cards list when clicked once', () => {
  })

  it('should remove a card from the selected cards list when clicked twice', () => {
  })

  it('should remove a card from the selected cards list when clicked twice', () => {
  })

   it('should add a comparison card when clicked twice', () => {
  })

  it('should remove a card from the selected cards list when clicked twice', () => {
  })

})