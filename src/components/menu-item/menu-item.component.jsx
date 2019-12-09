import React from 'react';

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => (
  <div
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
    className={`${size} menu-item`}
  >
    <div className='content'>
      <hi className='title'>{title}</hi>
      <span className='subtitle'>shop now</span>
    </div>
  </div>
)

export default MenuItem;