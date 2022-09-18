
export const FormPerfil = () => {
    return (
      <div className="container">
        <div className="container-perfil">
            <div className="width-p">


          <h4>Cambiar información</h4>
          <p className="sub-text">
            Los cambios se reflejarán en todos los servicios
          </p>
          <div className="df-col">
          <i className="fa-solid fa-user-secret size"></i>
          <p className="text-mr font-color">CAMBIAR FOTO</p>
        </div>
          <form>
            <div >
                <label htmlFor="nombre">Nombre</label>
              <input className="group-form" type="text" id="nombre"
              placeholder="Ingresa tu nombre..." 
              name="nombre" />
            </div>
            <div >
                <label htmlFor="biografía">biografía</label>
              <input className="group-form" type="textarea" id="biografía"
              placeholder="Ingresa tu Biografía..." 
              name="Biografía" />
            </div>
            <div >
                <label htmlFor="teléfono">Teléfono</label>
              <input className="group-form" type="tel" id="teléfono"
              placeholder="Ingresa tu teléfono..." 
              name="teléfono" />
            </div>
            <div >
                <label htmlFor="email">email</label>
              <input className="group-form" type="email" id="email"
              placeholder="Ingresa tu email..." 
              name="email" />
            </div>
            <div >
                <label htmlFor="contraseña">contraseña</label>
              <input className="group-form" type="password" id="contraseña"
              placeholder="Ingresa tu contraseña..." 
              name="contraseña" />
            </div>
  
            <button className="button-guardar" type="submit">
              Guardar
            </button>
          </form>
            </div>
          
        </div>
      </div>
    );
  };
  