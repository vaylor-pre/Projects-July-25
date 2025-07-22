import React from 'react'

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="todo-item">
      <label>{todo.title}</label>
      <button className="delete-btn" onClick={onDelete}>
        Delete
      </button>
    </div>
  )
}

export default TodoItem
