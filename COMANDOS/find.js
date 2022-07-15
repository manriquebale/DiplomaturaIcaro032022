const tasks = require('../tasksData')

function find(title) {
    let bandera = false
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].title == title){
          bandera = true
        }
    }
  return bandera
}

module.exports = { find }

/*Archivo find.js: esta funcionalidad recibirá un parámetro 
y deberá retornar un true o false dependiendo de si encuentra 
o este parámetro dentro del listado de tareas (cómo título).*/