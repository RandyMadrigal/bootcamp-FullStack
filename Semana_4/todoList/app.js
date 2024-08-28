/*Objetivo del Desafío: Crear una aplicación To-Do List 
que permita agregar tareas y marcarlas como completadas. 
Deberán completar partes del código para asegurarse de 
que la aplicación funcione correctamente. */

const btnAddTask = document.getElementById("addTaskButton");
const taskInput = document.getElementById("newTaskInput");
const taskList = document.getElementById("taskList");

btnAddTask.addEventListener("click", () => {
  const newTask = taskInput.value.trim();

  if (newTask) {
    addTask(newTask);
    taskInput.value = ""; // Limpiar el campo de entrada después de añadir la tarea
  } else {
    alert("Por favor, ingresa una tarea.");
  }
});

const addTask = (taskDescription) => {
  const newListItem = document.createElement("li");
  newListItem.textContent = taskDescription;

  newListItem.addEventListener("click", (e) => {
    e.target.classList.toggle("completed");
  });

  taskList.appendChild(newListItem);
};
