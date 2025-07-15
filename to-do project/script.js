document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todo-list');
    const newTodoInput = document.getElementById('new-todo');
    const addBtn = document.getElementById('add-btn');
    const clearAllBtn = document.getElementById('clear-all');
    const pendingCountSpan = document.getElementById('pending-count');

    let todos = [];

    // AJAX: Fetch todos from JSON file using Fetch API
    fetch('todos.json')
        .then(response => {
             return response.json(); // Parse JSON from the response
        })
        .then(data => {
            // Filter for user 1 and store in todos array
            todos = data.filter(todo => todo.userId === 1);
            showTodos();
            updatePendingCount();
        })
        // Add new todo
    addBtn.addEventListener('click', addTodo);
    newTodoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

   // Clear all pending todos
clearAllBtn.addEventListener('click', clearAllPending);

    function addTodo() {
        const task = newTodoInput.value.trim();
        if (task) {
            const newTodo = {
                userId: 1,
                id: Date.now(), // Use timestamp as temporary ID
                title: task,
                completed: false
            };
            todos.unshift(newTodo); // Add to beginning of array
            showTodos();
            updatePendingCount();
            newTodoInput.value = '';
        }
    }

    function showTodos() {
        todoList.innerHTML = '';

        // Only show pending (incomplete) todos
        const pendingTodos = todos.filter(todo => !todo.completed);

        pendingTodos.forEach(todo => {
            const todoItem = document.createElement('div');
            todoItem.className = 'todo-item';

            todoItem.innerHTML = `
                <label>${todo.title}</label>
                <button class="delete-btn" data-id="${todo.id}">Delete</button>
            `;

            todoList.appendChild(todoItem);
        });
           // Add event listeners to delete buttons
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                deleteTodo(parseInt(e.target.dataset.id));
            });
        });
    }

    function deleteTodo(id) {
        // Remove the todo with matching id
        todos = todos.filter(todo => todo.id !== id);
        showTodos();
        updatePendingCount();
    }

    function clearAllPending() {
    // Remove all pending (incomplete) tasks
    todos = todos.filter(todo => todo.completed);
    showTodos();
    updatePendingCount();
}

    function updatePendingCount() {
        const pendingCount = todos.filter(todo => !todo.completed).length;
        pendingCountSpan.textContent = `You have ${pendingCount} pending ${pendingCount === 1 ? 'task' : 'tasks'}`;
    }
});
