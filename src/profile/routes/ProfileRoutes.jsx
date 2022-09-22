import { Routes, Route, Navigate } from 'react-router-dom';
import { PerfilPage } from '../../auth/pages/ProfilePage';

export const ProfileRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={ <PerfilPage/> }/>

        <Route path='/*' element={ <Navigate to='/'/> }/>
    </Routes>
  )
}
