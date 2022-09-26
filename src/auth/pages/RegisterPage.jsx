import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';

import axios from 'axios';
import Swal from 'sweetalert2';
import '../../css/stylesc.css' 

import { useForm, useAuthStore } from '../../hooks';

const registerFormFields = {
  registerEmail: "",
  registerPassword: "",
};

const alphanumeric = new RegExp(/^[A-Za-z0-9\s]/g);

const formValidations = {
  registerEmail: [ (value) => value.includes('@') & value.includes('.'), 'Email debe contener @ y "."'],
  registerPassword: [ (value) => (alphanumeric.test(value) && value.length >= 8), 
                      'Contraseña debe incluir letras, numeros y tener al menos 8 caracteres.'],
}



export const RegisterPage = () => {

  const [ formSubmitted, setFormSubmitted ] = useState( false );

  const { status } = useSelector( state => state.auth );
  
  const { errorMessage, startRegister } = useAuthStore();
  const {
    registerEmail,
    registerPassword,
    onInputChange: onRegisterInputChange,
    isFormValid, 
    registerEmailValid, 
    registerPasswordValid,
  } = useForm( registerFormFields, formValidations );

  // console.log( registerPasswordValid )
  
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
        startRegister({
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

  const registerSubmit = (event) => {
    event.preventDefault();

    setFormSubmitted(true);

    if ( !isFormValid ) return;

    startRegister({
      email: registerEmail,
      password: registerPassword,
    });
  };
  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error en la autenticación", errorMessage, "error");
    }
  }, [errorMessage]);




  
  return (
    <div className="container">
      <div className="container-register">
        <h4>Únase a miles de personas de todo el mundo</h4>
        <p className="sub-text">
          Domina el desarrollo web full-stack realizando este desafio de la vida
          real propuesto por Shifta
        </p>
        <form onSubmit={registerSubmit}>
          <div className="group-form">
            <div className="icon-form">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <input
              type="email"
              placeholder="Email"
              name="registerEmail"
              value={registerEmail}
              onChange={onRegisterInputChange}
            />
          </div>

            { !!registerEmailValid && formSubmitted ? (<p className="p-danger">{ registerEmailValid }</p>) : "" }

          <div className="group-form">
            <div className="icon-form">
              <i className="fa-solid fa-lock"></i>
            </div>
            <input
              type="password"
              placeholder="Contraseña"
              name="registerPassword"
              value={registerPassword}
              onChange={onRegisterInputChange}
            />
          </div>

          { !!registerPasswordValid && formSubmitted ? (<p className="p-danger">{ registerPasswordValid }</p>) : "" }

          <button className="button-register" type="submit">
            Registrarse
          </button>
        </form>
        <p className="text-2">o continuar con estos perfiles sociales</p>
        <div className="continer-icon">
          <div className="icon-style">
            <i className="fa-brands fa-github"></i>
          </div>
          <button className="icon-style" onClick={login}>
            <i className="fa-brands fa-google"></i>
          </button>
        </div>

        <p className="text-2">¿Ya tiene una cuenta? 
        <Link
              color='inherit'
              to='/auth/login'>
          <span>Ingresar</span>
        </Link>
        </p>

      </div>
    </div>
  );
};
