import { useSelector, useDispatch } from 'react-redux';

import Swal from 'sweetalert2';
import { pageApi } from '../api/pageApi';

import { onSetUserProfile,
         onUpdateUserProfile,
         onLoadProfile,
         onLogoutProfile } from '../store';

export const useProfileStore = () => {

  const dispatch = useDispatch();

  const { user } = useSelector( state => state.auth );
  const { profileUser, isLoadingProfile } = useSelector( state => state.profile );

  const setUserProfile = async() => {
  
    const { data } = await pageApi.get('/profile');

    // console.log( data );

    dispatch( onSetUserProfile( data ) );
  };

  // Inicia proceso de guardar un nuevo evento
  // const startUpdateUserProfile = async ( profile ) => {

  //   try {
  //     // Si el evento de calendario tiene la prop "id" 
  //     // significa que esta "Actualizando" uno existente
  //     if( profileUser.uid === user.uid ) {

  //       await pageApi.put(`/profile/${ profile.uid }`, profile );
  
  //       /* copia del objeto original {...calendarEvent}*/
  //       dispatch( onUpdateUserProfile( {...profile, user } ) );
  
  //       return;
  //     }
  
  //       // Crear nuevo evento haciendo un POST al backend
  //       // const { data } = await pageApi.post('/events', calendarEvent )
  
  //       // dispatch( onAddNewEvent( { ...calendarEvent,
  //       //                           id : data.evento.id,
  //       //                           user
  //       //                         }) );
  //   } catch (error) {
      
  //     console.log(error)
  //     Swal.fire('Error al guardar', error.response.data.msg, 'error')

  //   }
   
    
  // }

  return {
    // Propiedades

    profileUser, 
    isLoadingProfile,
    
    // Metodos
    setUserProfile,
    // startUpdateUserProfile
  }
}
