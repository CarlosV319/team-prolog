import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../auth";
import { PerfilPage } from "../auth/pages/PerfilPage";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { FormProfile } from "../component/FormProfile";
import { useAuthStore } from "../hooks";
import { EditProfilePage } from "../profile/pages/EditProfilePage";

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  console.log(status);

  if (status === "checking") {
    return <h3>Cargando...</h3>;
  }

  return (
    <Routes>
    

      {status === "Login-authenticated" ? (
        <Route path="/*" element={<PerfilPage />} />
      ) : status === "Register-authenticated" ? (
        <Route path="/*" element={<FormProfile />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

    
    </Routes>
  );
};
