import { useEffect, useState } from 'react';
import './App.css';
import ListaTareas from "./componentes/ListaTareas";
function App() {
  const [listaQuehaceres,setListaQ] = useState(() =>{
    const savedData = localStorage.getItem("tareas");
    const value = JSON.parse(savedData); 
    return value || [];
  });
  const [tarea,setQ] = useState({
    detalle:"",
    completada:false
  }) 

  const changeCheck = (e,index) =>{
    listaQuehaceres[index].completada = !listaQuehaceres[index].completada;
    setListaQ( [...listaQuehaceres]);
  }

  const borraTarea = (e,index) =>{
    let listaFiltrada = listaQuehaceres.filter((tarea,indice) => index!==indice);
    setListaQ([...listaFiltrada]);
  }

  useEffect(() =>{
    localStorage.setItem("tareas", JSON.stringify(listaQuehaceres))
  },[listaQuehaceres])

  return (
    <div className="App">
      <ListaTareas tarea={tarea} setQ={setQ} setListaQ={setListaQ}/>
      {
        listaQuehaceres.map((tarea,index) =>
        <div key={index}>
          <span  className={tarea.completada?"checked":""}>{tarea.detalle} 
          <input type="checkbox" checked={tarea.completada} onChange={(e) => changeCheck(e,index)}></input></span>
          <button onClick={(e) => borraTarea(e, index)}>Borrar</button>
        </div> 
        )
      }
    </div>
  );
}

export default App;
