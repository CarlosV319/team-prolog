import { useEffect /* , useState */ } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks';

import { useProfileStore } from '../../hooks/useProfileStore';

const formFields = {
    name: '',
    avatar: '',
    bio: '',
    email: '',
    password: '',
    phoneNumber: '',
}


export const EditProfilePage = () => {

  const { name,
          avatar,
          bio,
          email,
          password,
          phoneNumber,
          formState,
          setFormState,
          onInputChange } = useForm( formFields );

  const { profileUser } = useSelector( state => state.profile );

  const { setUserProfile } = useProfileStore();

  const { updateUserProfile } = useProfileStore()
  
  useEffect(() => {

    if( profileUser !== null) {
        setFormState({ ...profileUser });
    }
  
  }, [ profileUser ]);

  useEffect(() => {

    setUserProfile();
  }, []);

  const onSaveProfileChanges = async( event ) => {

    event.preventDefault();

    await updateUserProfile( formState );

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
                  value={ avatar }
                  onChange={ onInputChange }
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
                value={ name }
                onChange={ onInputChange }
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
                value={ bio }
                onChange={ onInputChange }
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
                value={ phoneNumber }
                onChange={ onInputChange }/>
            </div>
            <div >
                <label htmlFor="email">email</label>
              <input 
                className="group-form" 
                type="email" 
                id="email"
                placeholder="Ingresa tu email..." 
                name="email" 
                value={ email }
                onChange={ onInputChange }
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
                value={ password }
                onChange={ onInputChange }
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