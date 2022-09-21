import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";
import { store } from "./store";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <GoogleOAuthProvider clientId="460270658005-htl3tult9jvji943gkbtd4btams77pd4.apps.googleusercontent.com">
            <AppRouter />
          </GoogleOAuthProvider>
        </BrowserRouter>
      </Provider>
    </>
  );
};
