const tasks = require('../tasksData')

function filterF (title) {
    let filteredTasks = [] //defino un arreglo vacío para guardar las tareas que coincidan con el título
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].title.includes(title)) {
        console.log(tasks[i].title)
        filteredTasks.push(tasks[i])
      }
    }
    return filteredTasks
  }

module.exports = { filterF }


/*Archivo filter.js: esta funcionalidad 
hace algo similar al find.js, pero en vez de 
retornar si encontró el valor que se le pasa 
por parámetro o no, esta función deberá retornar
 todas las tareas que contengan (en su título) 
 lo que se le pasa por parámetro a la función.
Es decir, si tenemos tres tareas: correr, comer 
y saltar, y llamamos la función pasándole por parámetro
 el string “co”( filter(‘co’) ), esta funcionalidad 
 debería retornar un array con las primeras dos tareas(correr y comer ),
  ya que sólo estas dos contienen el string “co” dentro del título.*/