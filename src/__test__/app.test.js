import 'raf/polyfill';

import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/app.js'
import renderer from 'react-test-renderer'

describe("Tests the App component", () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  // it("takes and compares a snapshot", () => {
  //   const component = renderer.create(<App />)
  //   expect(component).toMatchSnapshot()
  // })
  
})