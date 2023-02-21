import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import store from "./redux/store";
ReactDOM.createRoot(document.getElementById("root")).render(
  
    <BrowserRouter>
      <React.StrictMode>
        <Auth0Provider
          domain="https://dev-gbi7cjff7l8crood.us.auth0.com"
          clientId="aFOBw4sLMAFyUVFp4mQqeOw2X2MZd9xy"
          authorizationParams={{
            redirect_uri: "http://localhost:5173",
          }}
        >
          <Provider store={store}>
            <App />
          </Provider>
        </Auth0Provider>
      </React.StrictMode>
    </BrowserRouter>
);
