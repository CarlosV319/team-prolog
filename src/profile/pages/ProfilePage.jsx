import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useProfileStore } from '../../hooks/useProfileStore';
import { Link } from 'react-router-dom';
import '../css/ProfilePage.css' 
import { useAuthStore } from "../../hooks";
// import {Avatar} from '@material-ui/core/Avatar';

export const ProfilePage = () => {

    const { startLogout } = useAuthStore();

    const { setUserProfile } = useProfileStore();
    const { profileUser } = useSelector(state => state.profile);

    useEffect(() => {

        setUserProfile();
    }, []);

    return (
        <>
            <div className="titulo-profile">
                <h1>Información personal</h1>
                <p className="font-color">Información básica, como tu nombre y foto</p>
            </div>
            <div >
                <button className="btn-logout" onClick={startLogout}>
                    <i className="icon-mr fa-solid fa-right-from-bracket"></i>Salir
                </button>
            </div>

            <div className="container-profile">


                <div className="continer-profile-1">
                    <div>
                        <div className="df-col">
                            <div>
                                <p className="font-l">Perfil</p>
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
                    <div className="df-col">
                        <p className="text-mr font-color">FOTO</p>
                        {/* <Avatar alt="SZ" src="/static/images/avatar/3.jpg" /> */}
                        <p className="text-mr font-color">{/* {profileUser?.avatar} */}</p>
                    </div>
                    <hr />
                    <div className="df-col">
                        <p className="text-mr font-color">NOMBRE</p>
                        <p>{profileUser?.name}</p>
                    </div>
                    <hr />
                    <div className="df-col">
                        <p className="text-mr font-color">BIOGRAFÍA</p>
                        <p className="text-w">
                            {profileUser?.bio}
                        </p>
                    </div>
                    <hr />
                    <div className="df-col">
                        <p className="text-mr font-color">TELÉFONO</p>
                        <p>{profileUser?.phoneNumber}</p>
                    </div>{" "}
                    <hr />
                    <div className="df-col">
                        <p className="text-mr font-color">EMAIL</p>
                        <p>{profileUser?.email}</p>
                    </div>{" "}
                    <hr />
                    <div className="df-col">
                        <p className="text-mr font-color">CONTRASEÑA</p>

                        <p>{profileUser?.password}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
