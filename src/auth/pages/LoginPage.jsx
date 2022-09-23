import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useGoogleLogin } from '@react-oauth/google';
import Swal from 'sweetalert2';

import { useForm, useAuthStore } from '../../hooks';
import './LoginPage.css';


const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
}

export const LoginPage = () => {

    const { errorMessage, startLogin } = useAuthStore();
    const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm( loginFormFields );

    const loginSubmit = (event) => {

        event.preventDefault();

        startLogin({
            email: loginEmail,
            password: loginPassword,
        });
    };

    const login = useGoogleLogin({
        onSuccess: async (response) => {
            try {
                const res = await axios.get(
                    "https://www.googleapis.com/oauth2/v3/userinfo",
                    {
                        headers: {
                            Authorization: `Bearer ${response.access_token}`,
                        },
                    }
                );
                console.log(res.data);
                startLogin({
                    name: res.data.name,
                    email: res.data.email,
                    password: res.data.sub,
                    avatar: res.data.picture,
                    google: true,
                });
            } catch (error) {
                console.log(error);
            }
        },
    });

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
                    <form >
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
                            <button 
                                className="button-login"
                                /* type="submit" */
                                onClick={ loginSubmit }
                                    >
                                    <Link to={'/profile'}>Ingresar</Link>
                                </button>
                       
                        </div>
                    </form>
                    <p className="text-2">o continuar con estos perfiles sociales</p>
                </div>
                <div className="continer-icon">
                    <div className="icon-style">
                        <i className="fa-brands fa-github"></i>
                    </div>
                    <button className="icon-style" onClick={login}>
                        <i className="fa-brands fa-google"></i>
                    </button>
                </div>
                <p className="text-2">¿No tienes una cuenta? 
                    <Link 
                        to='/auth/register'>
                            <span>Registrate</span>
                    </Link>
                </p>

            </div>
        </div>
    );
};
