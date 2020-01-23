import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './cart-item.component';

it('should render cart-item component', () => {
  const mockItem = {
    imageUrl: 'www.testImage.com',
    price: 900,
    name: 'Jackets',
    quantity: 2
  };
  expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
});
