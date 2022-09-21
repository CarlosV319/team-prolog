import { Routes, Route, Navigate } from 'react-router-dom';
import { PerfilPage } from '../../auth/pages/PerfilPage';

export const ProfileRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={ <PerfilPage/> }/>
       
        <Route path='/*' element={ <Navigate to='/'/> }/>
    </Routes>
  )
}
