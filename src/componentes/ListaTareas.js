import React from "react";

const ListaTareas = (props) => {
    const {setListaQ} = props;
    const {tarea,setQ} = props;

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(tarea.detalle.trim()==="") return;
        setListaQ((prev) => [
            ...prev,
            tarea
        ]);
        setQ({
            detalle:"",
            completada:false
        })
    }
    const setQuehacerDescription = (e) =>{
        setQ({
            ...tarea,
            detalle: e.target.value
        })
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <input type="text" value={tarea.detalle} onChange={(e) => setQuehacerDescription(e)}></input>
            <button type="submit">Agregar</button>
        </form>
    )
}


export default ListaTareas;