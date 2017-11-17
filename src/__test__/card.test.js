import 'raf/polyfill';
import React from 'react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import Card from '../components/card.js'

describe("Card Component", () => {
  it("should render a card", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card><p>Card rendered</p></Card>, div)
  })
})