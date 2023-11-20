import React from 'react'

function TaskItem({tarea, onTareaCompletada, onEliminarTarea}) {
  return (
    <div className='taskitem'>
        <input type="checkbox" 
        defaultChecked={tarea.completada} 
        onChange={() => onTareaCompletada(tarea.id)} />
        <label>{tarea.nombre}</label>
        <button className='btn-del' onClick={() => onEliminarTarea(tarea.id)}>
            Eliminar
        </button>
    </div>
  )
}

export default TaskItem