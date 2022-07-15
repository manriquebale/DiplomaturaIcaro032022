const tasks = require('../tasksData')

function returnF (title) {
  let tasksFinded = [];
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].title === title) 
      {
        tasksFinded.push(tasks[i].desc)
      }
    }
  return tasksFinded
}

module.exports  = { returnF }

/*Archivo return.js: esta funcionalidad recibirá un título por parámetro (string) 
y en caso de que ese título coincida con alguno de los que existen dentro del listado. 
Deberá retornar la descripción que corresponde a esa tarea.
*/