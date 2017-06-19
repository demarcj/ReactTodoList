import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {id: 1, name: 'Learn react', isComplete: true},
        {id: 2, name: 'Start a great career', isComplete: false},
        {id: 3, name: 'Live life!', isComplete: false}
      ],
      currentTodo: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleInputChange (evt) {
    this.setState({
      currentTodo: evt.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>To Do List</h1>
        </div>
        <div className="todoApp">
          <form action="">
            <b><label htmlFor="todo">Add To Do!</label></b>
            <input type="text" onChange={this.handleInputChange} id="todo" value={this.state.currentTodo}/>
          </form>
          <div className="todoList">
            <ul>
              {this.state.todos.map((todo) => <li key={todo.id}>
                <input type="checkbox" defaultChecked={todo.isComplete}/>{todo.name}
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
