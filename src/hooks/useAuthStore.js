import { useDispatch, useSelector } from 'react-redux';
import { pageApi } from '../api/pageApi';
import { clearErrorMessage, onChecking, onLogin, onLogout, onRegister } from '../store';

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {
        dispatch(onChecking());
        try {
            const { data } = await pageApi.post('/auth', { email, password });

            console.log( data )

            localStorage.setItem('token', data.token);
          
            dispatch(onLogin({ name: data.name, uid: data.uid }));

        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
            console.log( error )
        }

    }

    const startRegister = async (User) => {
        dispatch(onChecking());
        try {
            const { data } = await pageApi.post('/auth/register', { ...User});
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onRegister({ name: data.name, uid: data.uid }));

            console.log( data )
           

        } catch (error) {
            dispatch(onLogout(error.response.data?.msg || 'add valid email or password'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }

    }

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        if (!token) return dispatch(onLogout());

        try {
            const { data } = await page.get('auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: data.name, uid: data.uid }));
        } catch (error) {
            localStorage.clear();
            dispatch(onLogout());
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogout());
    }

    return {
        //Propiedades
        status,
        user,
        errorMessage,


        // Metodos
        checkAuthToken,
        startLogin,
        startLogout,
        startRegister,

    }
}
