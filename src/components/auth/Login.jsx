import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    //state para iniciar sesión
    const [ user, setUser ] = useState({
        email: '',
        password: ''
    })

    //extraer de usuario
    const { email, password } = user;

    const onChangeLogin = e => {
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
                <h1>Iniciar Sesión</h1>
                <form
                    onSubmit={handleSubmit}
                >
                     <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            onChange={onChangeLogin}
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
                            onChange={onChangeLogin}
                            value={password}
                        />
                     </div>  
                     
                     <div className="campo-form">
                         <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión"
                         />
                     </div>
                </form>

                <Link 
                    to="/nueva-cuenta"  
                    className="enlace-cuenta"
                >Obtener cuenta</Link>
            </div>
        </div>
     );
}
 
export default Login;