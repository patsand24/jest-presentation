import React, {Component} from 'react'
import { headerTitle } from '../constants.js'

export default class Header extends Component {
  render(){
    return (
      <div id="header">
        <span className="title">{headerTitle}</span>
      </div>
    )
  }
}