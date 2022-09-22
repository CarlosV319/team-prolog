import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import LoginGithub from "react-login-github";
import { AppRouter } from "./router";
import { store } from "./store";

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);


export const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <GoogleOAuthProvider clientId="460270658005-htl3tult9jvji943gkbtd4btams77pd4.apps.googleusercontent.com">
            <AppRouter />
          </GoogleOAuthProvider>
          <LoginGithub clientId="ac56fad434a3a3c1561e"
            onSuccess={onSuccess}
            onFailure={onFailure}
          />
        </BrowserRouter>
      </Provider>
    </>
  );
};
