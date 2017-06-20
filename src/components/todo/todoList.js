import React from "react";
import {TodoItem} from "./todoItem";
import PropTypes from "prop-types";

export const TodoList = (props) => (
  <div className="todoList">
    <ul>
      {props.todos.map((todo) => <TodoItem handleToggle={props.handleToggle} key={todo.id} {...todo} handleRemove={props.handleRemove}/>)}
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}