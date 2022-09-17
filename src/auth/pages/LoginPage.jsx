import React from 'react'
import Swal from 'sweetalert2'
import './LoginPage.css'

const loginFomFields = {
    loginEmail: '',
    loginPassword: '',
}
const loginSubmit = (event) => {
    event.preventDefault();
    startLogin({ email: loginEmail, password: loginPassword });
}

export const LoginPage = () => {

    const { startLogin, errorMessage } = useAuthStore();
    const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginFomFields);

    return (
        <div>LoginPage</div>
    )
}
