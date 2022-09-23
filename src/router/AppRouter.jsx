
import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { ProfileRoutes } from '../profile/routes/ProfileRoutes';
import { useAuthStore } from '../hooks';



export const AppRouter = () => {

const { status, checkAuthToken } = useAuthStore();

const { pathname }  = useLocation();

const lastPath = pathname;

  localStorage.setItem('lastPath', lastPath);

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