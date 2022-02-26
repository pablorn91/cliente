import Tarea from "./Tarea";
const ListadoTareas = () => {

    const tareas = [
        {nombre: 'Elegir Plataforma', estado: true},
        {nombre: 'Seleccionar Colores', estado: false},
        {nombre: 'Elegir Plataforma de pago', estado: true},
        {nombre: 'Selecionar Hosting', estado: false}
    ]

    return ( 
        <>
            <h2>Proyecto: Tienda Virtual</h2>
            <ul className="listado-tareas">
                {tareas.length === 0 ? (
                    <li className="tarea">No hay tareas</li>
                ): (
                    tareas.map(tarea => (
                        <Tarea 
                            tarea={tarea}
                        />
                    ))
                )}
            </ul>
            <button 
                type="button"
                className="btn btn-eliminar"            
            >Eliminar Proyecto &times;</button>
        </>
     );
}
 
export default ListadoTareas;