import React from 'react';
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.styles.scss'

const Header = () => (
  <div className='header'>
    <link className='logo-container' to="/">
      <Logo className='logo' />
    </link>
  </div>
)