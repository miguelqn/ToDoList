import React, { useEffect } from 'react'
import './Toast.css'

function Toast({setToast}) {
    // Al no pasarle ningun parametro se ejecuta al inicio 1 vez
    useEffect(() => {
        setTimeout(() => {
            setToast(false)
        }, 3000);
    })

    const close = () => {
        setTimeout(() => {
            setToast(false)
        }, 20);
    }

  return (
    <div className='toast'>
        <div>¡Tareas actualizadas! </div>
        <button onClick={close} className='close'>X</button>
    </div>
  )
}

export default Toast