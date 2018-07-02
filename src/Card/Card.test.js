import React from 'react';
import Card from './index.js';
import { shallow } from 'enzyme';

describe('Card', () => {
  let wrapper;
  let mockData;
  let mockFn;

  beforeEach(() => {
    mockData = {
<<<<<<< HEAD
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
              '2014': 0.741 
              }

    mockFn = jest.fn()          
    wrapper = shallow(<Card location={ 'COLORADO' }
                            stats={ mockData }
                            findDistrictByClick={ mockFn }
                            selected={ false } />)
  })
=======
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
      '2014': 0.741 };

    mockFn = jest.fn()   ;       
    wrapper = shallow(<Card 
      location={ 'COLORADO' }
      stats={ mockData }
      findDistrictByClick={ mockFn }
      selected={ false } />);
  });
>>>>>>> 1ec4d58971389d33ff929319f6bb7371937a45b2

  it('matches the Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the findDistrictByClick function when the card is clicked one', () => {
    wrapper.find('.card').simulate('click');
    expect(mockFn).toBeCalled();
  });

  it('should have a className of selected set at default to false', () => {
    expect(wrapper.is('.selected')).toEqual(false);
<<<<<<< HEAD
  })
})
=======
  });

});
>>>>>>> 1ec4d58971389d33ff929319f6bb7371937a45b2
