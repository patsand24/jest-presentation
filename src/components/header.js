import React, {Component} from 'react'
import { headerTitle } from '../constants.js'

const Header = (props) => {
  return (
    <div id="header">
      <span className="title">{headerTitle}</span>
    </div>
  )
}

export default Header