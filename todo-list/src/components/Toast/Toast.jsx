import React, { useEffect } from 'react'
import './Toast.css'

function Toast({setToast}) {

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