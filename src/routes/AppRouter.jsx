import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../auth';
import { useAuthStore } from '../hooks';

export const AppRouter = () => {

    Reg

    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, [])

    if (status === 'checking') {
        return (
            <h3>Cargando...</h3>
        )
    }


    return (
        <Routes>
            {
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
            }


        </Routes>
    )
}
