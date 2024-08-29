/*Objetivo del Desafío: Crear una aplicación To-Do List 
que permita agregar tareas y marcarlas como completadas. 
Deberán completar partes del código para asegurarse de 
que la aplicación funcione correctamente. */

const KEY_ENTER = "Enter";

/*TODO: Get Button Element By Id*/
const btnAddTask = document.getElementById("addTaskButton");
const taskInput = document.getElementById("newTaskInput");
const taskList = document.getElementById("taskList");
const newTask = taskInput.value.trim();

btnAddTask.addEventListener("click", () => {
  const newTask = taskInput.value.trim();
  getTask(newTask);
});

const addTask = (taskDescription) => {
  const newListItem = document.createElement("li");
  newListItem.textContent = taskDescription;

  /*TODO: Add new event listener*/
  newListItem.addEventListener("click", (e) => {
    e.target.classList.toggle("completed");
  });

  /*TODO: Append a new child*/
  taskList.appendChild(newListItem);
};

/*Me puse creativo*/
window.addEventListener("keydown", (e) => {
  if (e.key === KEY_ENTER) {
    const newTask = taskInput.value.trim();
    getTask(newTask);
  }
});

const getTask = (newTask) => {
  if (newTask) {
    addTask(newTask);
    taskInput.value = ""; // Limpiar el campo de entrada después de añadir la tarea
  } else {
    alert("Por favor, ingresa una tarea.");
  }
};
