import './App.css'
import { useState } from 'react'
import data from './components/data.json'
import TaskList from './components/TaskList'

function App() {
  // De momento usando datos hardcodeados en un JSON
  const [tareas, setTareas] = useState(data)

  const onTareaCompletada = (id) => {
    //console.log('Tarea marcada: ' + id)
    /* Iteramos las tareas buscando la que coincida con el parametro id,
    se hace una copia modificando el valor de completada*/
    setTareas(tareas.map((tarea) => {
      return tarea.id === Number(id) 
      ? {...tarea, completada: !tarea.completada}
      : {...tarea}
    }))
  }

  const onEliminarTarea = (id) => {
    //console.log('Tarea borrada: ' + id)
    /* Se hace una copia de la lista, filtrando por el id de la tarea eliminada.
    Se mantienen todas aquellas que tengan un id diferente al del parametro */
    setTareas([...tareas].filter(tarea => tarea.id !== id))
  }

  return (
    <>
      <h1>ToDo - List</h1>
      <div>
          <TaskList 
          tareas={tareas} 
          onTareaCompletada={onTareaCompletada} 
          onEliminarTarea={onEliminarTarea}/>
      </div>
    </>
  )
}

export default App
