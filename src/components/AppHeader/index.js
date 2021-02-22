import React from 'react'
import deployButton from '../../assets/deploy-to-netlify.svg'
import logo from '../../assets/logo.svg'
import github from '../../assets/github.svg'
import styles from './AppHeader.css' // eslint-disable-line

const AppHeader = (props) => {
  return (
    <header className='app-header'>
      <div className='app-title-wrapper'>
        <div className='app-title-wrapper'>
          <div className='app-left-nav'>
            <img src={logo} className='app-logo' alt='logo' />
            <div className='app-title-text'>
              <h1 className='app-title'>Farms to feed us</h1>
              <p className='app-intro'>
                online database
              </p>
            </div>
          </div>
        </div>
        <div className='deploy-button-wrapper'>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
