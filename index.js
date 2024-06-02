import * as footer from "./footer.js";
import {
  saveTask,
  getTasks,
  onGetTasks,
  deleteTask,
  getTask,
  updateTask,
} from "./firebase.js";

// VARIABLES

let taskForm_Am = document.getElementById("task-form");
let title_Am = document.getElementById("task-title");
let description_Am = document.getElementById("task-description");
let tasksContainer = document.getElementById("tasks-container");
let editStatus = false;
let id = "";
// FUNCIONES

// EVENTOS

window.addEventListener("DOMContentLoaded", async () => {
  // console.log('estoy en evento!');
  onGetTasks((querySnapshot) => {
    let html = "";
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      html += `
            <div>
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <button class="btn-delete" data-id="${doc.id}">Eliminar</button>
            <button class="btn-edit" data-id="${doc.id}">Editar</button>
            </div>
            `;
    });
    tasksContainer.innerHTML = html;
    const btnsDelete = tasksContainer.querySelectorAll(".btn-delete");

    console.log(btnsDelete);
    btnsDelete.forEach((btn) => {
      btn.addEventListener("click", ({ target: { dataset } }) => {
        // console.log(dataset.id);
        deleteTask(dataset.id);
      });
    });

    const btnsEdit = document.querySelectorAll(".btn-edit");
    btnsEdit.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const doc = await getTask(e.target.dataset.id);
        const task = doc.data();

        title_Am.value = task.title;
        description_Am.value = task.description;

        editStatus = true;
        id = doc.id;
        taskForm_Am["btn-task-save"].innerText = "Actualizar";
      });
    });
  });
});

taskForm_Am.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log('enviado');
  // console.log(title_Am, description_Am);
  if (!editStatus) {
    saveTask(title_Am.value, description_Am.value);
  } else {
    updateTask(id, {
      title: title_Am.value,
      description: description_Am.value,
    });
    editStatus = false;
    taskForm_Am["btn-task-save"].innerText = "Guardar";

  }
  taskForm_Am.reset();
});
