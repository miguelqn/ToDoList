import React, { useState } from 'react'
import './TaskForm.css'

function TaskForm({addTarea}) {

  const [nuevaTarea, setNuevaTarea] = useState("")

  const handleChange = (e) => {
    //console.log(e.currentTarget.value)
    setNuevaTarea(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    // Prevenimos el comportamiento por defecto
    e.preventDefault()
    // Si el texto ingresado es diferente a un blanco, se agrega
    if (nuevaTarea.trim() !== ""){
      addTarea(nuevaTarea)
      // Seteamos el valor nuevamente en blanco
      setNuevaTarea("")
    }
  }

  return (
    <div className='taskform'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Ingrese una tarea' 
        value={nuevaTarea} onChange={handleChange}/>
        <button type='submit'>Agregar</button>
      </form>
    </div>
  )
}

export default TaskForm