// import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from '../../firebase/providers';
// import { clearNotesLogout } from '../journal';
// import { checkingCredentials, login, logout } from './authSlice';

// // Actions asincronas que necesitan ser ejecutadas
// // antes de enviarlas al reducer

// export const checkingAuthentication = ( email, password ) => {

//     return async ( dispatch ) => {

//         dispatch( checkingCredentials() );
//     }
// }

// export const startGoogleSignIn = () => {

//     return async ( dispatch ) => {

//         dispatch( checkingCredentials() );

//         const result = await singInWithGoogle();

//         // Si result.ok = false, disparamos logout
//         if( !result.ok ) return dispatch( logout( result.errorMessage ) );

//         // Si result.ok = true (autenticacion exitosa - login)
//         dispatch( login( result ));
//         // console.log({ result });
//     }
// }

// export const startCreatingUserWithEmailPassword = ({ email, password, displayName}) => {

//     return async ( dispatch ) => {

//         dispatch( checkingCredentials() );

//         // De la respuesta de registerUserWithEmailPassword
//         // extraigo algunas props para hacer validaciones
//         const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });


//         // Si la autenticacion falla (ok = false)
//         // Disparamos la action del logout
//         if( !ok ) return dispatch( logout( {errorMessage} ));
        
//         // Si sale bien, disparamos el login()
//         dispatch( login({ uid, email, displayName, photoURL }));
//     }

// }

// // export const startLoginWithEmailPassword = ({ email, password }) => {

// //     return async ( dispatch ) => {

// //         dispatch( checkingCredentials() );

// //         const result = await loginWithEmailPassword({ email, password });
    
// //         if( !result.ok ) return dispatch(logout(result));
        
// //         dispatch( login( result ));
// //     }
// // }


// export const startLogout = () =>  {
//     return async ( dispatch ) => {

//        await logoutFirebase();
//        // Llamo action creada en el reducers del journal
//        // que se encarga de vaciar el state del journal
//        // Borra las notas al desloguearse
//        dispatch( clearNotesLogout() );

//        dispatch( logout() );
//     }

// }