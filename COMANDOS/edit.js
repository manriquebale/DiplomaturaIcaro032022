const tasks = require('../tasksData')
function editF (title, newDescription) {
  let task;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title === title) {
      task = tasks[i]
      task.desc = newDescription
      return task
    }
  }
  return 'tarea no encontrada'
}


module.exports = { editF }

/*Archivo edit.js: esta funcionalidad aún no estará performando al 
100% en esta etapa. Pero ya la dejaremos creada para futuras 
iteraciones de nuestra app. Debería recibir dos parámetros: el primero es
 el título de la tarea a editar, y el segundo es la nueva descripción de 
 la tarea a editar. Como esta funcionalidad no hará nada realmente aún, 
 simplemente deberá devolver un objeto literal que contenga la información
  que a futuro se guardaría en la tarea.*/