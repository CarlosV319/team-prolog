import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../auth';
import { PerfilPage } from '../auth/pages/PerfilPage';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { useAuthStore } from '../hooks';
import { EditProfilePage } from '../profile/pages/EditProfilePage';


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
        {/* {

        ( status === 'not-authenticated' )  
            ?
                (
                    <>
                        <Route path='/auth/*' element={ <LoginPage/> }/>
                        <Route path='/*' element={ <Navigate to='auth/login'/> }/>
                    </>
                )
            :   
                ( 
                    <>
                        <Route path='/' element={ <PerfilPage/> }/>
                        <Route exact path="/profile/:id" component={ EditProfilePage }></Route>
                        <Route path='/*' element={ <Navigate to='/'/> }/>
                    </>
                )

        } */}
            
        {
          ( status === 'authenticated')

          ? <Route path='/*' element={<PerfilPage />}/>

          : <Route path='/auth/*' element={<AuthRoutes />}/>
        }

        <Route path='/*' element={ <Navigate to='auth/login'/>}/>

            {/* {
                (status === 'not-authenticated')
                    ? (
                        <>
                            <Route path="*" element={<RegisterPage />} />
                            <Route path="/*" element={<Navigate to="login" />} />
                        </>
                    )
                    : (
                        <>
                            <Route path="/" element={<LoginPage />} />
                            <Route path="/*" element={<Navigate to="/" />} />
                        </>
                    )
            } */}


    </Routes>
    )
}
