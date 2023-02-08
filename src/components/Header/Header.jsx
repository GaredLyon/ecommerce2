import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <p>Footcap</p>
      </div>
      <nav className='header__nav'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>

      <ul className='header__iconos'>
        <li>x</li>
        <li>x</li>
        <li>x</li>
        <li>x</li>
      </ul>

    </header>
  )
}
