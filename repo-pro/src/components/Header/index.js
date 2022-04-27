import React from 'react'
import styles from './style.css'

function Header() {
  return (
    <div>
        <header>
            <h1 className='title'>Repo Tracker</h1>
            <button className='light'>Light Mode</button>
            <button className='dark'>Dark Mode</button>
            
        </header>
    </div>
  )
}

export default Header
