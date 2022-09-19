import React from 'react'
import './LoginPage.css'
import { useForm } from '../../hooks';

const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
}

export const LoginPage = () => {

    const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginFormFields);


    const loginSubmit = (event) => {
        event.preventDefault();
        startLogin({ email: loginEmail, password: loginPassword });
    }

    return (
        <div className="container">
            <div className="container-login">
                <div className='group-form'>
                    <p>Ingreso</p>
                    <form onSubmit={loginSubmit}>
                        <div className="group-form">
                            <i className="fa-solid fa-envelope"></i>
                            <input
                                type="email"
                                placeholder="Email"
                                name="loginEmail"
                                value={loginEmail}
                                onChange={onLoginInputChange}
                            />
                        </div>
                        <div className="group-form">
                            <i className="fa-solid fa-lock"></i>
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
                    <div className="continer-icon">
                        <div className="icon-style">
                            <i className="fa-brands fa-github"></i>
                        </div>
                        <br />
                        <div className="icon-style">
                            <i className="fa-brands fa-google"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
