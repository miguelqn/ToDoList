import React from 'react'

function TaskItem({tarea, onTareaCompletada, onEliminarTarea}) {

  const styles = { textDecorationLine: tarea.completada ? "line-through" : "none" }

  return (
    <div className='taskitem'>
        <input type="checkbox" 
        defaultChecked={tarea.completada} 
        onChange={() => onTareaCompletada(tarea.id)} />
        <label style={styles}>{tarea.nombre}</label>
        <button className='btn-del' onClick={() => onEliminarTarea(tarea.id)}>
            Eliminar
        </button>
    </div>
  )
}

export default TaskItem