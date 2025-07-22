//main TodoApp component
// This component manages the todo application state and renders child components

import React, { useState, useEffect } from 'react'
import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

const TodoApp = () => {
  const [todos, setTodos] = useState([])

  // Fetch todos from API
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        // Filter for userId 1
        const userTodos = data.filter(todo => todo.userId === 1)
        setTodos(userTodos)
      } catch (error) {
        console.error('Error fetching todos:', error)
      }
    }

    fetchTodos()
  }, [])

  // Add new todo
  const addTodo = async (title) => {
    const newTodoItem = {
      userId: 1,
      id: Date.now(), // Use timestamp as temporary ID
      title: title,
      completed: false
    }

    // Add to beginning of array
    setTodos(prevTodos => [newTodoItem, ...prevTodos])

    // Send to server
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodoItem),
      })

      if (response.status === 201) {
        console.log('Todo added successfully')
      }
    } catch (error) {
      console.error('Error adding todo:', error)
    }
  }

  // Delete todo by ID
  const deleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  // Clear all pending (incomplete) todos
  const clearAllPending = () => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.completed))
  }

  // Get only pending todos for display
  const pendingTodos = todos.filter(todo => !todo.completed)

 //assigning props to child components
  return (
    <div className="todo-header">
      <TodoHeader />
      <TodoInput onAddTodo={addTodo} />
      <TodoList todos={pendingTodos} onDeleteTodo={deleteTodo} />
      <TodoFooter
        pendingCount={pendingTodos.length}
        onClearAll={clearAllPending}
      />
    </div>
  )
}

export default TodoApp
