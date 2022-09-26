import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useProfileStore } from '../../hooks/useProfileStore';
import { Link } from 'react-router-dom';
import '../../css/ProfilePage.css' 
import { useAuthStore } from "../../hooks";


export const ProfilePage = () => {

    const { startLogout } = useAuthStore();

    const { setUserProfile } = useProfileStore();
    const { profileUser } = useSelector(state => state.profile);
console.log(profileUser?.bio)
    useEffect(() => {

        setUserProfile();
    }, []);

    return (
        <>
            <div className='container-profile'>

            <div className="titulo-profile">
                <p className='info-p'>Información personal</p>
                <p className="font">Información básica, como tu nombre y foto</p>
            </div>
            <div >
                <button className="btn-logout" onClick={startLogout}>
                    <i className="icon-mr fa-solid fa-right-from-bracket"></i>Salir
                </button>
            </div>

            <div className="container-profile-date">


                <div className="continer-profile-1">
                    <div>
                        <div className="df-col">
                            <div>
                                <p className="font-l font-c">Perfil</p>
                                <p className="sub-text">
                                    La información no puede ser visible para otras personas
                                </p>
                            </div>
                            <Link to={'/profile/' + profileUser?.uid}>
                                <button className="btn-edit">Editar</button>
                            </Link>
                        </div>
                        <hr />
                    </div>
                    <div className="df-col-photo">
                        <p className="text-mr font-color">FOTO</p>
                        { profileUser.avatar ? <img src={profileUser.avatar} alt="foto de perfil" /> :
                <i className="fa-solid fa-user-secret size"></i>}
                    </div>
                    <hr />
                    <div className="df-col">
                        <p className="text-mr font-color">NOMBRE</p>
                        <p className='font-c'>{profileUser?.name}</p>
                    </div>
                    <hr />
                    <div className="df-col">
                        <p className="text-mr font-color">BIOGRAFÍA</p>
                        <p className='font-c'>
                            {profileUser?.bio}
                        </p>
                    </div>
                    <hr />
                    <div className="df-col">
                        <p className="text-mr font-color">TELÉFONO</p>
                        <p className='font-c'>{profileUser?.phoneNumber}</p>
                    </div>{" "}
                    <hr />
                    <div className="df-col">
                        <p className="text-mr font-color">EMAIL</p>
                        <p className='font-c'>{profileUser?.email}</p>
                    </div>{" "}
                    <hr />
                    <div className="df-col">
                        <p className="text-mr font-color">CONTRASEÑA</p>

                        <p className='font-c'>{profileUser?.password}</p>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};
