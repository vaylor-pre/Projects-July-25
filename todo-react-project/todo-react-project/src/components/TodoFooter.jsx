import React from 'react'

const TodoFooter = ({ pendingCount, onClearAll }) => {
  return (
    <div className="todo-bottom">
      <span id="pending-count">
        You have {pendingCount} pending {pendingCount === 1 ? 'task' : 'tasks'}
      </span>
      <button id="clear-all" onClick={onClearAll}>
        Clear All Pending
      </button>
    </div>
  )
}

export default TodoFooter
