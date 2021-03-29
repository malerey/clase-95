import React, { useState } from 'react';
import Tarea from './components/Tarea';
import Alumna from './components/Alumna'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [mostrarError, setMostrarError] = useState(false)
  const [valorDelInput, setValorDelInput] = useState('');
  const [lista, setLista] = useState([
    'Lavar ropa',
    'Corregir TPS',
    'Desarmar cajas',
    'Cepillar gatos',
    'Insultar a Pepo',
    'Putear a d1sn3y mientras mando CVs a otras empresas',
  ])

// como borro un elemento en especifico de la lista? --> splice, filter
// XX como hago para saber que elemento quiero borrar? --> con el indice o con el elemento en si 
// XX como hago para que esa informacion llegue a la funcion? --> parametro 

const modificarElementoDelArray = (valorNuevo, indice) => {
  console.log("estas tratando de modificar", valorNuevo, indice)

  const nuevaLista =  [...lista]
  nuevaLista.splice(indice, 1, valorNuevo)
  console.log(nuevaLista)
  setLista(nuevaLista)
  // esta funcion necesito que se ejecute cuando se hace click en el botojn que esta en Tarea.js
}

  const borrarElementoDelArray = (tarea) => {
    // aqui borramos un elemento del array

    // si uso splice, voy a crear un array nuevo eliminando el elemento que ya no quiero
    // en el caso de filter, voy a crear un array nuevo con todos los elementos que NO sean el que quiero borrar

    // filter hace un nuevo array a partir de los elementos que pasen una condicion 
    setLista([...lista].filter(elemento => elemento !== tarea))
  }

  const handleClick = () => {
    if (valorDelInput === "") {
      setMostrarError(true)
    }

    valorDelInput && setLista([ ...lista, valorDelInput ]) // a fuego guardarse esto
    setValorDelInput("")
  };

  const handleChange = e => {
    // en la funcion setState se pasa *el nuevo valor de la variabke*
    setValorDelInput(e.target.value);
  };

  // En el handle click tenemos en el console.log el valor del input,
  // la tarea que el usuario quiere agregar
  // TU MISION, SI DESEAS ACEPTARLA, es lograr que esa tarea se vea en la lista
  // con todas las demas.


  return (
    <div>

    {/* <FontAwesomeIcon icon={faStar} /> */}

      <ol>
        {lista.map((tarea, i) => (
          <Tarea 
            key={i} 
            indice={i}
            tarea={tarea} 
            borrarElementoDelArray={borrarElementoDelArray}
            modificarElementoDelArray={modificarElementoDelArray}
            />
        ))}
      </ol>

      <label>
        Agregar tarea...
        <input
          value={valorDelInput}
          onChange={handleChange}
          type="text"
          placeholder="Por ej, putear a Pepo"
        />
      </label>
     
     {mostrarError &&
      <h2>No podes agregar una tarea vacia</h2>
      }

      <button onClick={handleClick}>Agregar tarea</button>
    </div>
  );
};

export default App;
