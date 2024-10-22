// script.js
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', () => {
        const taskText = todoInput.value.trim();
        if (taskText) {
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox">
                <span>${taskText}</span>
                <button class="delete-button">Delete</button>
            `;
            todoList.appendChild(li);
            todoInput.value = '';
        }
    });

    todoList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-button')) {
            e.target.parentElement.remove();
        }
    });
});
