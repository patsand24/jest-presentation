import 'raf/polyfill';

import React from 'react'
import Input from '../components/input.js'
import renderer from 'react-test-renderer'

describe("Testing the input", () => {

  //We will use Jest's mock function tool to build a mock funciton to pass to Input
  const mockEnterClickFunction = jest.fn()
  
  it('should create an input card', () => {
    const inputComponent = renderer.create(<Input enterClick={mockEnterClickFunction}/>)
    expect(inputComponent).not.toBe(null)
  })
  // it('should match snapshot', () => {
  //   const inputComponent = renderer.create(<Input enterClick={mockEnterClickFunction}/>)
  //   expect(inputComponent).toMatchSnapshot()
  // })
  //These next tests will test Inputs functions. 
  //We will mock an event target to act as the input
  //we will then test to make sure the functions are working as designed.
  // const inputComponent = renderer.create(<Input enterClick={mockEnterClickFunction}/>)
  // const tree = inputComponent.toJSON()
  // const newInput = "New Input"
  // const mockTarget = {target: {value: newInput}}

  // it("updates state as text is entered", () => {
  //   tree.children[1].children[0].props.onChange(mockTarget)
  //   expect(inputComponent.getInstance().state.inputText).toEqual(newInput)
  // })

  // it("calls enterClick function and clears input", () => {
  //   tree.children[1].children[1].props.onClick()
  //   expect(mockEnterClickFunction.mock.calls.length).toBeGreaterThan(0)
  //   expect(inputComponent.getInstance().state.inputText).toEqual('')
  // })
})
