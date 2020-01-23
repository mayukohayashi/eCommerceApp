import React from 'react';
import { shallow } from 'enzyme';

import { CollectionItem } from './collection-item.component';

describe('CollectionItem component', () => {
  let wrapper;
  let mockAddItem;
  const imageUrl = 'www.testImage.com';
  const mockName = 'black hat';
  const mockPrice = 100;

  beforeEach(() => {
    mockAddItem = jest.fn();

    const mockProps = {
      item: {
        imageUrl: imageUrl,
        price: mockPrice,
        name: mockName
      },
      addItem: mockAddItem
    };

    wrapper = shallow(<CollectionItem {...mockProps} />);
  });

  it('should render CollectionItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call addItem when CustomButton is clicked', () => {
    wrapper.find('CustomButton').simulate('click');

    expect(mockAddItem).toHaveBeenCalled();
  });

  it('should render imageUrl as a prop on backgroundImage of style', () => {
    expect(wrapper.find('.image').prop('style')).toStrictEqual( {"backgroundImage": `url(${imageUrl})`} )
  });

  it('should render name prop in name class', () => {
    expect(wrapper.find('.name').text()).toBe(mockName);
  });

  it('should render price prop in price class', () => {
    const price = parseInt(wrapper.find('.price').text());
    expect(price).toBe(mockPrice);
  });

})
