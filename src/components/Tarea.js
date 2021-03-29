import React, {useState} from 'react';
import './Tarea.css'

const Tarea = ({ tarea, indice, borrarElementoDelArray, modificarElementoDelArray }) => {

  const [valorDelInputModificar, setValorDelInputModificar] = useState("")
  const [completada, setCompletada] = useState(false)
  const [modoEditar, setModoEditar] = useState(false)


  const handleClick = () => {
    setCompletada(true)
  }

  const handleClickBorrar = () => {
    borrarElementoDelArray(tarea)
  }

  const handleClickModificar = () => {
    setModoEditar(true)
  }

  const handleChange = e => {
    // esta es la e del evento del input
    setValorDelInputModificar(e.target.value)
  }

  const handleClickGuardar = () => {
    // aca necesito saber lo que escribio el usuario
    console.log(valorDelInputModificar)
    // despues se lo mando a App.js

    modificarElementoDelArray(valorDelInputModificar, indice)    
  }

  // XX primero, saber que escribio el usuario en el input
  // XX segundo, cuando el usuario haga click en guardar, llevarle ese nuevo valor a App.js
  // tercero, editar el array original 
  return (
    <>
    {
      modoEditar 
      ? <div>
        <input onChange={handleChange}/> 
        <button onClick={handleClickGuardar}>Guardar nuevo valor</button></div>
      : <li className={completada ? "completada" : ""}>{tarea}</li> 
    }
    <button onClick={handleClick}>Completar tarea</button>
    <button onClick={handleClickBorrar}>Borrar tarea</button>
    <button onClick={handleClickModificar}>Modificar tarea</button>
  </>
  )
}

export default Tarea;
