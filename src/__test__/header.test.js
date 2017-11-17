import 'raf/polyfill';
import React from 'react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import Header from '../components/header.js'

describe("Header Component", () => {
  it("should render a card", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div)
  })
})