// Get the reference to the "myUL" task list
const taskList = document.getElementById('myUL');

// Function to mark a task as complete
function markAsComplete(checkbox) {
  const parentLi = checkbox.parentElement;
  if (checkbox.checked) {
    parentLi.classList.add('checked');
  } else {
    parentLi.classList.remove('checked');
  }
}

// Add event listeners to checkboxes for marking tasks as complete
const checkboxes = document.querySelectorAll('#myUL input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    markAsComplete(checkbox);
  });
});


// Function to add a new task
function addNewTask() {
  const newTask = inputField.value;
  if (newTask.trim() !== '') {
    const newLi = document.createElement('li');
    newLi.innerHTML = `
      <input type="checkbox">
      <label>${newTask}</label>
      <button class="complete-btn">Complete</button>
      <button class="delete-btn">Delete</button>
    `;

    const checkbox = newLi.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => {
      markAsComplete(checkbox);
    });

    const deleteBtn = newLi.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      newLi.remove();
    });

    // Apply the same styling to the new task as the existing tasks
    const firstExistingTask = document.querySelector('#myUL li');
    const computedStyles = window.getComputedStyle(firstExistingTask);
    newLi.style.backgroundColor = computedStyles.backgroundColor;
    newLi.style.color = computedStyles.color;

    taskList.appendChild(newLi);
    inputField.value = '';

    // Adjust the checkboxes and delete buttons event listeners for all tasks
    checkboxes.forEach((checkbox) => {
      checkbox.removeEventListener('change', () => {
        markAsComplete(checkbox);
      });
      checkbox.addEventListener('change', () => {
        markAsComplete(checkbox);
      });
    });

    deleteBtns.forEach((deleteBtn) => {
      deleteBtn.removeEventListener('click', () => {
        const parentLi = deleteBtn.parentElement;
        parentLi.remove();
      });
      deleteBtn.addEventListener('click', () => {
        const parentLi = deleteBtn.parentElement;
        parentLi.remove();
      });
    });
  }
}

// Add event listener to the "Add" button
const addBtn = document.querySelector('.addBtn');
const inputField = document.getElementById('myInput');
addBtn.addEventListener('click', addNewTask);

// Function to remove all tasks
function removeAll() {
  taskList.innerHTML = '';
}

// Add event listener to the "Clear Items" button
const clearBtn = document.getElementById('clear-list');
clearBtn.addEventListener('click', removeAll);


// Function to add a new task
function addNewTask() {
    const newTask = inputField.value;
    if (newTask.trim() !== '') {
      const newLi = document.createElement('li');
      newLi.classList.add('task-item');
      newLi.innerHTML = `
        <input type="checkbox">
        <label>${newTask}</label>
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">Delete</button>
      `;
  
      taskList.appendChild(newLi);
      inputField.value = '';
  
      // Adjust the checkboxes and delete buttons event listeners for the new task
      const checkbox = newLi.querySelector('input[type="checkbox"]');
      checkbox.addEventListener('change', () => {
        markAsComplete(checkbox);
      });
  
      const deleteBtn = newLi.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', () => {
        newLi.remove();
      });
    }
  }