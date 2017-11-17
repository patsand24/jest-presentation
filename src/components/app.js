import React, {Component} from 'react'
import Header from './header.js'
import Card from './card.js'
import Input from './input.js'
import { toggleTodo, addTodo, removeTodo } from '../state-functions.js'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: []
    }
  }

  addTodo = (item) => {
    this.setState(addTodo(this.state, item))
  }

  toggle = (index) => {
    return () => {
      this.setState(toggleTodo(this.state, index))
    }
  }

  remove = (index) => {
    return () => {
      this.setState(removeTodo(this.state, index))
    }
  }

  render() {
    const { todos } = this.state
    const newTodos = todos.map((todo, index) => {
      const style = {
        textDecoration: todo.complete ? 'line-through' : null,
        cursor: 'pointer'
      }
      return (
        <Card key={index}>
          <span style={style} onClick={this.toggle(index)} className={"clickable"}>{todo.text}</span>
          {todo.complete ? <span style={{color: 'red'}} className={"clickable"} onClick={this.remove(index)}>COMPLETE</span>: null}
        </Card>
      )
    })
    return (
      <div>
        <Header />
        <div id="content">
          <Input enterClick={this.addTodo}/>
          {newTodos}
        </div>
      </div>
    )
  }
}