import React from "react";
import axios from "axios";
import swal from 'sweetalert';
import { Redirect, useHistory } from "react-router-dom";
import Footer from './Footer'
import { Form } from 'react-bootstrap';

const Login = () => {
    const history = useHistory();

    /*recibo el evento*/
    const submitHandler = (e) => {
        e.preventDefault();
        /*evento.elemento.campo.valor*/
        const email = e.target.email.value;
        const password = e.target.password.value;

        /*la expresion regular sirve para validar q efectivamente lo qu le estamos pasando es un email*/
        const regexEmail =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        /*ò*/
        if (email === "" || password === "") {/*para evitar que los campos qeden vacios*/
            swal(<h2>
                los campos no pueden estar vacios
            </h2>)
            return;
        } if (email !== "" && !regexEmail.test(email)) {
            swal(<h2>
                esto no es una direccion de correo electronico valido
            </h2>)
            return;
        }

        if (email !== "challenge@alkemy.org" || password !== "react") {
            swal(<h2>
                credenciales invalidas
            </h2>)
            return
        }
        /*si pasa todas las comparaciones me enviara este mensaje*/
        console.log("estamos listos para enviar la informacion")
        /*luego de esto viene las peticiones*/
        axios.post('http://challenge-react.alkemy.org', { email, password }) /*peticion asincrona a traves de la promesa q es axios*/
            .then(res => { /* el token esta dentro de la propiedad data */
                swal("Bien hecho!", "Acceso concedidon!", "success");
                console.log(res.data)
                const tokenRecibido = res.data.token; /*valor del token para almacenar en local storage*/
                localStorage.setItem('token', tokenRecibido);/*solo cuando se recibe la informacion a traves del proceso de validacion de datos, local storage solo guarda strings*/
                history.push("/Listado");
            })
    }
    /*luedgo de todas estas comparaciones con if me dara o no acceso depende de lo introducido por el usuario*/

    let token = localStorage.getItem('token')


    return (
        <>
            {token && <Redirect to='/Listado' />}
            <div className="row">
                <div className="col-6 offset-3">
                    <h1>Formulario</h1>
                    <Form onSubmit={submitHandler}>
                        <label className="form-label d-block mt-2">
                            <span>Correo electronico:</span> <br />
                            <input className="form-control" type="text" name="email" />
                        </label>
                        <br />
                        <label className="form-label d-block mt-2">
                            <span>Contraseña:</span> <br />
                            <input className="form-control" type="password" name="password" />
                        </label>
                        <br />
                        <button className="btn btn-success mt-2" type="submit">ingresar</button>
                    </Form>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Login;