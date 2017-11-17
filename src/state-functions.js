//Pure functions

export const toggleTodo = (state, index) => {
  if(index === undefined || index < 0 || index >= state.todos.length){
    return state
  }
  const todo = state.todos[index]
  todo.complete = !todo.complete
  return Object.assign(state, {todos: [...state.todos.slice(0, index), todo, ...state.todos.slice(index + 1)]})
}

export const addTodo = (state, todo) => {
  if(todo === undefined || todo === ''){
    return state
  }
  const newTodo = {text: todo, complete: false}
  const newState = state.todos.concat([newTodo])
  return Object.assign(state, {todos: newState})
}

export const removeTodo = (state, index) => {
  if(index === undefined || index < 0 || index >= state.todos.length){
    return state
  }
  const newTodos = [...state.todos.slice(0, index), ...state.todos.slice(index + 1)]
  return Object.assign(state, {todos: newTodos})
}
