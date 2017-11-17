import React, { Component } from 'react'
import Card from './card.js'
import { headerTitle } from '../constants.js'

export default class Input extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputText: ''
    }
  }

  enterText = (e) => {
    this.setState({inputText: e.target.value})
  }

  clickEnter = () => {
    const { enterClick } = this.props
    const { inputText } = this.state
    enterClick(inputText)
    this.setState({inputText: ''})
  }

  render() {
    const { inputText } = this.state
    return (
      <Card>
        <p> Enter a To-Do:</p>
        <div style={{width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <input className="inputBox" type="text" onChange={this.enterText} value={inputText}></input>
          <span className="clickable" onClick={this.clickEnter}>Enter</span>
        </div>
      </Card>
    )
  }
}