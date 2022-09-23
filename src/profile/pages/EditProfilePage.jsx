import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useProfileStore } from '../../hooks/useProfileStore';


export const EditProfilePage = () => {


  const { profileUser } = useSelector( state => state.profile );

  // Almacenar vista en el localStorage
  const [ lastView, setLastView ] = useState( localStorage.getItem( 'lastView' ) || 'week' );

  const { updateUserProfile } = useProfileStore()
  
  const [formValues, setFormValues] = useState({
    name: '',
    avatar: '',
    bio: '',
    email: '',
    password: '',
    phoneNumber: '',
  });

  useEffect(() => {
    if( profileUser !== null) {
        setFormValues({ ...profileUser });
    }

  }, [ profileUser ]);

 
  const onInputChanged = ( { target } ) => {
    setFormValues({
        ...formValues,
        [ target.name ]: target.value
    });
  };

  const onSaveProfileChanges = async( event ) => {

    event.preventDefault();

    await updateUserProfile( formValues );

  }


  return (
    <>
    <h1>Edit Profile</h1>
    <div className="container">
        <div className="container-perfil">
            <div className="width-p">


          <h4>Cambiar información</h4>
          <p className="sub-text">
            Los cambios se reflejarán en todos los servicios
          </p>
          
          <form
            onSubmit={ onSaveProfileChanges }
            >
            <div className="df-col">
            <i className="fa-solid fa-user-secret size"></i>
            <p className="text-mr font-color">CAMBIAR FOTO</p>
            <input 
                  className="group-form" 
                  type="text" 
                  id="avatar"
                  placeholder="Cargar nueva imagen..." 
                  name="avatar"
                  value={ formValues.avatar }
                  onChange={ onInputChanged }
            />
            </div>
            <div >
                <label htmlFor="nombre">Nombre</label>
              <input 
                className="group-form" 
                type="text" 
                id="nombre"
                placeholder="Ingresa tu nombre..." 
                name="name"
                value={ formValues.name }
                onChange={ onInputChanged }
                />
            </div>
            <div >
                <label htmlFor="biografía">biografía</label>
              <input 
                className="group-form" 
                type="textarea" 
                id="biografía"
                placeholder="Ingresa tu Biografía..." 
                name="bio" 
                value={ formValues.bio }
                onChange={ onInputChanged }
                />
            </div>
            <div >
                <label htmlFor="teléfono">Teléfono</label>
              <input 
                className="group-form" 
                type="tel" 
                id="teléfono"
                placeholder="Ingresa tu teléfono..." 
                name="phoneNumber" 
                value={ formValues.phoneNumber }
                onChange={ onInputChanged }/>
            </div>
            <div >
                <label htmlFor="email">email</label>
              <input 
                className="group-form" 
                type="email" 
                id="email"
                placeholder="Ingresa tu email..." 
                name="email" 
                value={ formValues.email }
                onChange={ onInputChanged }
                />
            </div>
            <div >
                <label htmlFor="contraseña">contraseña</label>
              <input 
                className="group-form" 
                type="password" 
                id="contraseña"
                placeholder="Ingresa tu contraseña..." 
                name="password" 
                value={ formValues.password }
                onChange={ onInputChanged }
                />
            </div>
  
            <button 
              className="button-guardar" 
              type="submit"
              >
              Guardar
            </button>
          </form>
            </div>
          
        </div>
      </div>
    </>
  );
};