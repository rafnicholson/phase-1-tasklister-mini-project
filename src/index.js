document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskDescription = e.target['new-task-description'].value;
    const taskPriority = e.target['task-priority'].value;
    buildTask(taskDescription, taskPriority);
    form.reset();
  });

  const currentDayElement = document.getElementById('current_day');
  currentDayElement.textContent = getCurrentDay();
});

function getCurrentDay() {
  const days = ["Sunday's", "Monday's", "Tuesday's", "Wednesday's", "Thursday's", "Friday's", "Saturday's"];
  const currentDate = new Date();
  const currentDay = days[currentDate.getDay()];
  return `${currentDay} List`;
}

function buildTask(task, priority) {
  let li = document.createElement('li');
  li.textContent = task;
  li.classList.add(priority);

  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'task-checkbox';

  const tasks = document.getElementById('tasks');

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      li.classList.add('completed');
    } else {
      li.classList.remove('completed');
    }
  });
  li.appendChild(checkbox);
  tasks.appendChild(li);
}