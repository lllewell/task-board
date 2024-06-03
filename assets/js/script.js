// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem('tasks'));
let nextId = JSON.parse(localStorage.getItem('nextId'));
const taskTitle = $('#task-title');
const taskDueDate = $('#task-due-date');
const taskDescription = $('#task-description');

// TODO: create a function to generate a unique task id
function generateTaskId() {
  // if nextId does not exist in localStorage, set it to 1
  if (nextId === null) {
    nextId = 1
  } else {
    // otherwise, increment it by 1
    nextId++
  };

  // save nextId to localStorage
  localStorage.setItem('nextId', nextId);
}

// TODO: create a function to create a task card
function createTaskCard(task) {
  // create card elements
  const cardEl= $('<div>');
  const pastDueCardEl = $('<div>');
  const nearDueCardEl = $('<div>');
  const cardHeader = $('<div>');
  const cardBody = $('<div>');
  const cardText = $('<p>');

  // I want the cardHeader to be the taskTitle, the dueDate to be in the cardBody and the description to be in the <p>

  cardHeader.addClass('header h4');
  cardBody.addClass('body');
  cardText.addClass('text');




  // set card background color based on due date
  let today = dayjs();
  const taskDate = dayjs(task.dueDate, 'MM/DD/YYYY');
  
  if (today > taskDate) {
    pastDueCardEl.css('background-color', 'red');
  } else if (today < taskDate) {
    nearDueCardEl.css('background-color', 'yellow');
  };



  // append card elements
  const todoEl = $('#todo-cards')

  todoEl.append(cardEl);
  todoEl.append(pastDueCardEl);
  todoEl.append(nearDueCardEl);
}

// TODO: create a function to render the task list and make cards draggable
function renderTaskList() {
  // if taskList is null, set it to an empty array
  taskList = JSON.parse(localStorage.getItem("tasks")) || [];

  // empty existing task cards
  const toDoList = $('#todo-cards');
  toDoList.empty();

  const inProgressList = $('#in-progress-cards');
  inProgressList.empty();

  const doneList = $('#done-cards');
  doneList.empty();


  // loop through tasks and create task cards for each status
  for (let task of taskList) {
    if (task.status === 'todo') {
      $('#todo-cards').append();
      // Figure out what you need to append the cards to
    } else if (task.status === 'inProgress') {
      $('#in-progress-cards').append();
    } else if (task.status === 'done') {
      $('#done-cards').append();
    }

    createTaskCard(task);

    // make task cards draggable

    $(function () {
      $("#todo-cards").draggable();
      $('#in-progress-cards').draggable();
      $('#done-cards').draggable();
    });
  }
};


// TODO: create a function to handle adding a new task
function handleAddTask(event) {
  event.preventDefault();

  taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  // create a new task object
  const newTask = {
    title: taskTitle.val().trim(),
    dueDate: taskDueDate.val().trim(),
    description: taskDescription.val().trim(),
    status: 'todo'
  };

  // add the new task to the taskList save and render
  taskList.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(taskList));

  renderTaskList();
}

// TODO: create a function to handle deleting a task
function handleDeleteTask(event) {
  // get the task id from the button clicked

  // remove the task from the taskList, save and render
}

// TODO: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
  // get the task id and new status from the event

  // update the task status of the dragged card

  // save and render
}

// TODO: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  // render the task list
  renderTaskList();

  // add event listener
  const addTaskBtn = $('#add-task');

  addTaskBtn.on('click', handleAddTask);
  
  // make lanes droppable
  $('.lane').droppable({
    drop: function (event, ui) {
      $(this)
        .addClass("ui-state-highlight");


    }
  });

  // make due date field a date picker
  $(function () {
    $('#task-due-date').datepicker({
      changeMonth: true,
      changeYear: true,
    });
  });
});


