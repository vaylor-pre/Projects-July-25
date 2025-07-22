import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <div className="todo-list" id="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}  //passing the entire todo object
          onDelete={() => onDeleteTodo(todo.id)}
        />
      ))}
    </div>
  )
}

export default TodoList
