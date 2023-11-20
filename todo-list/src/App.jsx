import './App.css'
import { useState, useEffect } from 'react'
import data from './components/data.json'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'
import Toast from './components/Toast/Toast'

function App() {
  // Datos dummies para pruebas iniciales
  //const [tareas, setTareas] = useState(data)
  const [tareas, setTareas] = useState([])
  
  const [showToast, setToast] = useState(false)

  useEffect(() => {
    //console.log('Lista de tareas actualizada')
    /* Al cambiar el estado de la lista de tareas, se muestra un
    pequeño toast, que se cierra automaticamente luego de unos segundos*/
    setToast(true)
  },
  [tareas])

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

  const addTarea = (nuevaTarea) => {
    //console.log('Nueva tarea', nuevaTarea)
    /* Creamos una nueva tarea, con el id en base a la fecha para simplificar, 
    por defecto el completado va en falso */
    let newTarea = {id : +new Date(), nombre: nuevaTarea, completada: false}
    // Seteamos las tareas con la nueva tarea ingresada
    setTareas([...tareas, newTarea])
  }

  return (
    <>
      <h1>Lista de Tareas</h1>
      <div className='app'>
          <TaskForm addTarea={addTarea}/>
          <TaskList 
          tareas={tareas} 
          onTareaCompletada={onTareaCompletada} 
          onEliminarTarea={onEliminarTarea}/>

          {showToast ? <Toast setToast={setToast}/> : ""}
      </div>
    </>
  )
}

export default App
