document.addEventListener('DOMContentLoaded', function() {

    let todos = [];
    // Fetch todos from JSON file
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        todos = data.filter(function (todo) {
            return todo.userId === 1;
        });
        showTodos();
        updatePendingCount();
    }
   };
     xhr.send();
       // Add new todo functionality
        const newTodoInput = document.getElementById('new-todo');
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
            newTodoInput.focus();

            // send the new todo to the server
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://jsonplaceholder.typicode.com/todos', true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 201) {
                    console.log('Todo added successfully');
                }
            };
            xhr.send(JSON.stringify(newTodo));
        }
       }
      // Add new todo listeners
         const addBtn = document.getElementById('add-btn');
         addBtn.addEventListener('click', addTodo);
        newTodoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
     // Update pending count of tasks
     const pendingCountSpan = document.getElementById('pending-count');
    function updatePendingCount() {
        const pendingCount = todos.filter(function(todo) {
          return !todo.completed;
        }).length;
        pendingCountSpan.textContent = `You have ${pendingCount} pending ${pendingCount === 1 ? 'task' : 'tasks'}`;
      }
       // Delete a todo by ID
       function deleteTodo(id) {
      todos = todos.filter(function(todo) {
         return todo.id !== id;
          });
        showTodos();
        updatePendingCount();
      }
       //function to show only pending todos
      const todoList = document.getElementById('todo-list');
        function showTodos() {
        todoList.innerHTML = '';

        const pendingTodos = todos.filter(function(todo) {
        return !todo.completed;
       });
       // Display pending todos
      pendingTodos.forEach(function(todo) {
       const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';
             todoItem.innerHTML = `
                <label>${todo.title}</label>
                <button class="delete-btn" data-id="${todo.id}">Delete</button>
            `;
             todoList.appendChild(todoItem);
           });
           // Add event listeners to delete buttons
        document.querySelectorAll('.delete-btn').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
        deleteTodo(parseInt(e.target.dataset.id));
        });
      });
        }

        function clearAllPending() {
        // Remove all pending (incomplete) tasks
        todos = todos.filter(function(todo) {
           return todo.completed;
       });
       showTodos();
       updatePendingCount();
      }
       // Clear all listener
    const clearAllBtn = document.getElementById('clear-all');
    clearAllBtn.addEventListener('click', clearAllPending);
 });
