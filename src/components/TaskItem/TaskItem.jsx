import React, { useState } from 'react'
import './TaskItem.css'

function TaskItem({tarea, onTareaCompletada, onEliminarTarea}) {

  const [estaCompletada, setEstaCompletada] = useState(tarea.completada)

  const cambioEstado = () => {
    setEstaCompletada(!estaCompletada)
    onTareaCompletada(tarea.id)
  }

  const styles = { textDecorationLine: estaCompletada ? "line-through" : "none" }

  return (
    <div className='taskitem'>
        <input type="checkbox"
        defaultChecked={estaCompletada} 
        onChange={cambioEstado} />
        <label style={styles}>{tarea.nombre}</label>
        <button className='btn' onClick={() => onEliminarTarea(tarea.id)}>
            Eliminar
        </button>
    </div>
  )
}

export default TaskItem