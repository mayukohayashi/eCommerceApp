import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from './error-boundary.component';

it('should render error-boundary component', () => {
  expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
});
