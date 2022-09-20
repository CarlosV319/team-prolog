export const PerfilPage = () => {
  return (
    <div className="container">
      <div>
        <button>
          <i className="fa-solid fa-right-from-bracket"></i>Salir
        </button>
      </div>
      <h1>Información personal</h1>
      <p className="font-color">Información básica, como tu nombre y foto</p>
      <div className="continer-perfil">
        <div>
          <div className="df-col">
            <div>
              <p className="font-l">Perfil</p>
              <p className="font-xs font-color">
                La información no puede ser visible para otras personas
              </p>
            </div>
            <button className="btn-edit">Editar</button>
          </div>
          <hr />
        </div>
        <div className="df-col">
          <p className="text-mr font-color">FOTO</p>
          <i className="fa-solid fa-user-secret size"></i>
        </div>
        <hr />
        <div className="df-col">
          <p className="text-mr font-color">NOMBRE</p>
          <p>Cristian Da Silva</p>
        </div>
        <hr />
        <div className="df-col">
          <p className="text-mr font-color">BIOGRAFÍA</p>
          <p className="text-w">
            Soy desarrollador de software y un gran aficionado a los...
          </p>
        </div>
        <hr />
        <div className="df-col">
          <p className="text-mr font-color">TELÉFONO</p>
          <p>3414 30 6347</p>
        </div>{" "}
        <hr />
        <div className="df-col">
          <p className="text-mr font-color">EMAIL</p>
          <p>cristiand@shifta.la</p>
        </div>{" "}
        <hr />
        <div className="df-col">
          <p className="text-mr font-color">CONTRASEÑA</p>
          <p>************</p>
        </div>
      </div>
    </div>
  );
};
