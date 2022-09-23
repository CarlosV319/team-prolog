import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { useAuthStore } from '../hooks';
import { EditProfilePage } from '../profile/pages/EditProfilePage';
import { ProfileRoutes } from '../profile/routes/ProfileRoutes';


export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        
        checkAuthToken();
    }, [])

    console.log( status )

    if (status === 'checking') {
        return (
            <h3>Cargando...</h3>
        )
    }


    return (

    <Routes>
            
        {
          ( status === 'authenticated')

          ? 
            
            
          <Route path='/*' element={<ProfileRoutes />}/>
                       
        
          : <Route path='/auth/*' element={<AuthRoutes />}/>
        }

        <Route path='/*' element={ <Navigate to='auth/login'/>}/>
        

    </Routes>
    )
}
