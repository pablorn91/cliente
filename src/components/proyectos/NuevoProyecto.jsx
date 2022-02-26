import { useState } from "react";

const NuevoProyecto = () => {

    const [ proyecto, setProyecto ] = useState({
        nombre: ''
    })
    const { nombre } = proyecto;

    const handleOnchage = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        
        //validación

        //agregar al state

        //reinicar el form
    }

    return ( 
        <>
            <button
            type="button"
            className="btn btn-block btn-primario"
            >Nuevo Proyecto</button>
            <form 
                className="formulario-nuevo-proyecto"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="nombre"
                    onChange={handleOnchage}
                    value={nombre}
                />

                <input 
                    type="submit" 
                    className="btn btn-primario btn-block"
                    value="Agregar Proyecto"
                />

            </form>
        </>
     );
}
 
export default NuevoProyecto;