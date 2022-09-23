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
  
    const { data } = await pageApi.get('/profile/', user.uid );

    dispatch( onSetUserProfile( data ) );
  };

  const updateUserProfile = async ( profileUser ) => {

    try {
    
      if( profileUser?.uid ) {

        const resp = await pageApi.put(`/profile/${ user.uid }`, profileUser );

        dispatch( onUpdateUserProfile( { ...profileUser, user} ) );
  
        return;
      }

      dispatch( onSetUserProfile( { ...userProfile } ) );

    } catch (error) {
      
      console.log(error)
      Swal.fire('Error al guardar', 'error')
    }

  }

  return {
    // Propiedades
    profileUser, 
    isLoadingProfile,
    
    // Metodos
    setUserProfile,
    updateUserProfile
  }
}
