import React from 'react'
import TaskItem from './TaskItem'

function TaskList({tareas, onTareaCompletada, onEliminarTarea}) {
  return (
    <div className='tasklist'>
      {tareas.map((tarea, index) => (
        <TaskItem 
        key={'tarea-' + index} 
        tarea={tarea}
        onTareaCompletada={onTareaCompletada} 
        onEliminarTarea={onEliminarTarea} />
      ))}
    </div>
  )
}

export default TaskList