

export const Register = () => {
  return (
    <div className="container">
      <div className="container-register">
        <h4>Únase a miles de personas de todo el mundo</h4>
        <p className="sub-text">
          Domina el desarrollo web full-stack realizando este desafio de la vida
          real propuesto por Shifta
        </p>
        <form>
          <div className="group-form">
            <div className="icon-form">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <input type="email" placeholder="Email" name="registerEmail" />
          </div>
          <div className="group-form">
            <div className="icon-form">
              <i className="fa-solid fa-lock"></i>
            </div>
            <input
              type="password"
              placeholder="Contraseña"
              name="registerPassword"
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

        <p className="text-2">¿Ya tiene una cuenta? <span>Ingresa</span></p>
      
      </div>
    </div>
  );
};
