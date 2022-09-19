import { useEffect } from 'react';
import { useForm, useAuthStore } from "../../hooks";
import Swal from 'sweetalert2';

const registerFormFields = {
  registerEmail: "",
  registerPassword: "",
};

export const Register = () => {
  const { errorMessage, startRegister } = useAuthStore();
  const {
    registerEmail,
    registerPassword,
    onInputChange: onRegisterInputChange,
  } = useForm(registerFormFields);

  const registerSubmit = (event) => {
    event.preventDefault();
    startRegister({
      email: registerEmail,
      password: registerPassword,
    });
    
  };
  useEffect(() => {
    if ( errorMessage !== undefined ) {
      Swal.fire('Error en la autenticación', errorMessage, 'error');
    }    
  }, [errorMessage])
  

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

          <button className="button-register" type="submit">
            Registrarse
          </button>
        </form>
        <p className="text-2">o continuar con estos perfiles sociales</p>
        <div className="continer-icon">
          <div className="icon-style">
            <i className="fa-brands fa-github"></i>
          </div>
          <div className="icon-style">
            <i className="fa-brands fa-google"></i>
          </div>
        </div>

        <p className="text-2">
          ¿Ya tiene una cuenta? <span>Ingresa</span>
        </p>
      </div>
    </div>
  );
};
