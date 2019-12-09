import React from 'react';

import './homepage.styles.scss'

const HomePage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <hi className='title'>HATS</hi>
          <span className='subtitle'>shop now</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <hi className='title'>JACKETS</hi>
          <span className='subtitle'>shop now</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <hi className='title'>スニーカー</hi>
          <span className='subtitle'>購入はコチラ</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <hi className='title'>MENS</hi>
          <span className='subtitle'>shop now</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <hi className='title'>WOMENS</hi>
          <span className='subtitle'>shop now</span>
        </div>
      </div>

    </div>
  </div>
)

export default HomePage;