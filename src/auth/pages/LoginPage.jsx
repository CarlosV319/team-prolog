import React, { useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';
import Swal from 'sweetalert2';


import { useForm, useAuthStore } from '../../hooks';
import './LoginPage.css';


const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
}

export const LoginPage = () => {
    const { errorMessage, startLogin } = useAuthStore();
    const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginFormFields);

    const loginSubmit = (event) => {
        event.preventDefault();
        startLogin({
            email: loginEmail,
            password: loginPassword,
        });

    };
    useEffect(() => {
        if (errorMessage !== undefined) {
            Swal.fire('Error en la autenticación', errorMessage, 'error');
        }
    }, [ errorMessage ])


    return (
        <div className="container">
            <div className="container-login">
                <div className='group-form'>
                    <p>Ingreso</p>
                    <form onSubmit={loginSubmit}>
                        <div className="group-form">
                            <div className="icon-form">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <input
                                type="email"
                                placeholder="Email"
                                name="loginEmail"
                                value={loginEmail}
                                onChange={onLoginInputChange}
                            />
                        </div>
                        <div className="group-form">
                            <div className="icon-form">
                                <i className="fa-solid fa-lock"></i>
                            </div>
                            <input
                                type="password"
                                placeholder="Contraseña"
                                name="loginPassword"
                                value={loginPassword}
                                onChange={onLoginInputChange}
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <button className="button-login"
                                type="submit">
                                Ingresar
                            </button>
                        </div>
                    </form>
                    <p className="text-2">o continuar con estos perfiles sociales</p>
                </div>
                <div className="continer-icon">
                    <div className="icon-style">
                        <i className="fa-brands fa-github"></i>
                    </div>
                    <div className="icon-style">
                        <i className="fa-brands fa-google"></i>
                    </div>
                </div>
                <p className="text-2">¿No tienes una cuenta? 
                    <Link 
                        component={ RouterLink }
                        color='inherit' 
                        to='/auth/register'>
                            <span>Registrate</span>
                    </Link>
                </p>

            </div>
        </div>
    );
};
