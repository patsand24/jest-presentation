import { toggleTodo, addTodo } from "../state-functions.js"
const emptyToggleState = {todos: []}
describe("State Functions: addTodo", () => {
  
  it("should return state as is if no string supplied", () => {
    const newState = addTodo(emptyToggleState, '')
    expect(newState).toEqual(emptyToggleState)
  })
  
  // it("should return state with new todo if new todo is supplied", () => {
  //   const todoString = 'Add Todo'
  //   const newState = addTodo(emptyToggleState, todoString)
  //   expect(newState.todos[0].text).toBe(todoString)
  // })
  
})

// const emptyAddState = {todos: []}
// const populatedState = addTodo(emptyAddState, "Here is a Todo")
// describe("State Functions: toggleTodo", () => {
  
//   it("should return state if no index supplied", () => {
//     const newState = toggleTodo(emptyAddState)
//     expect(newState).toEqual(emptyAddState)
//   })

//   it("should return state if index does not exist in current state", () => {
//     const newState = toggleTodo(populatedState, 1)
//     expect(newState).toEqual(emptyAddState)
//   })

//   it("should return state with todo toggled if valid index is supplied", () => {
//     const newState = toggleTodo(populatedState, 0)
//     expect(newState.todos[0].complete).toBeTruthy()
//   })

// })