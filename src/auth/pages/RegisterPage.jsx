export const Register = () => {
  return (
    <div className="container">
      <div className="container-register">
        <h4>Únase a miles de personas de todo el mundo</h4>
        <p>
          Domina el desarrollo web full-stack realizando este desafio de la vida
          real propuesto por Shifta
        </p>
        <form>
          <div>
            <input
              className="input-form"
              type="email"
              placeholder="Email"
              name="registerEmail"
            />
          </div>
          <div>
            <input
              className="input-form"
              type="password"
              placeholder="Contraseña"
              name="registerPassword"
            />
          </div>

          <div>
            <input
              className="button-register"
              type="submit"
              value="Registrarse"
            />
          </div>
        </form>
        <p>o continuar con estos perfiles sociales</p>
        <p>¿ya tiene una cuenta? Ingresa</p>
      </div>
    </div>
  );
};
