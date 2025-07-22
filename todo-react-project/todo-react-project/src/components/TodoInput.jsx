import React, { useState } from 'react'

const TodoInput = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('')

  // Function to handle adding a new todo
  const handleInput = () => {
    const task = inputValue.trim()
    // Check if input is not empty
    if (task) {
      onAddTodo(task)
      setInputValue('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleInput()
    }
  }

  return (
    <div className="add-todo">
        <input
        type="text"
        id="new-todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add your new todo"
        />
      <button id="add-btn" onClick={handleInput}>
        +
      </button>
    </div>
  )
}

export default TodoInput
