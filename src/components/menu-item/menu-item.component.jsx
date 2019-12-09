import React from 'react';

import './menu-item.styles.scss'

const MenuItem = ({ title }) => (
  <div className='menu-item'>
    <div className='content'>
      <hi className='title'>{title}</hi>
      <span className='subtitle'>shop now</span>
    </div>
  </div>
)

export default MenuItem;