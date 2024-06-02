// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// TODO: create a function to generate a unique task id
function generateTaskId() {
  // if nextId does not exist in localStorage, set it to 1
  if (nextId = '') {
    localStorage.setItem = 1
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
  const cardEl = $('<div>');
  const pastDueCardEl = $('<div>');
  const nearDueCardEl = $('<div>');


  // set card background color based on due date
  pastDueCardEl.css('background-color', 'red');
  nearDueCardEl.css('background-color', 'yellow');
  

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

 const inProgressList = $('in-progress-cards');
 inProgressList.empty();

 const doneList = $('done-cards');
 doneList.empty();


  // loop through tasks and create task cards for each status

  // make task cards draggable
  
  $( function() {
    $( "#todo-cards" ).draggable();
    $('#in-progress-cards').draggable();
    $('done-cards').draggable();
  });
}


// TODO: create a function to handle adding a new task
function handleAddTask(event) {
  // create a new task object
  const newTask = {
    taskTitle: '',
    taskDueDate: '',
    taskDescription: '',
  };

  // add the new task to the taskList save and render
  taskList.push(newTask);
  localStorage.setItem('taskList', JSON.stringify(taskList));
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
  JSON.parse(localStorage.getItem(taskList));

  // add event listener
  const addTaskBtn = $('.btn');

  addTaskBtn.on('click', function () {

  });

  // make lanes droppable


  // make due date field a date picker
  // Where is the due date field?
  $( function() {
    $( "#datepicker" ).datepicker();
  } );
});
