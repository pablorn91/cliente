import { useState } from "react";
import { Link } from "react-router-dom";

const NuevaCuenta = () => {

    //state para iniciar sesión
    const [ user, setUser ] = useState({
        nombre:'',
        email: '',
        password: '',
        confirmar: ''
    })

    //extraer de usuario
    const { nombre, email, password, confirmar } = user;

    const onChangeNuevaCuenta = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    //cuando el usuario quiere iniciar sesion
    const handleSubmit = e => {
        e.preventDefault()

        //validacion

        //pasarlo al action
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener Cuenta</h1>
                <form
                    onSubmit={handleSubmit}
                >
                     <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text" 
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            onChange={onChangeNuevaCuenta}
                            value={nombre}
                            />
                     </div>   
                     <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            onChange={onChangeNuevaCuenta}
                            value={email}
                            />
                     </div>   
                     <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            onChange={onChangeNuevaCuenta}
                            value={password}
                        />
                     </div>  
                     <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input 
                            type="password" 
                            id="confirmar"
                            name="confirmar"
                            placeholder="Confirma tu Password"
                            onChange={onChangeNuevaCuenta}
                            value={confirmar}
                        />
                     </div>  
                     
                     <div className="campo-form">
                         <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrame"
                         />
                     </div>
                </form>

                <Link 
                    to="/"  
                    className="enlace-cuenta"
                >¿Ya tienes cuenta? Iniciar Sesión</Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;