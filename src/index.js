import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css'; 
import'mdbreact/dist/css/mdb.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Keycloak from 'keycloak-js';
import ProductsContextProvider from './components/contexts/ProductsContext';
import CartContextProvider from './components/contexts/CartContext';
import * as serviceWorker from './serviceWorker';
import { LoginContext } from './components/Login';
import {Router} from "react-router-dom";
// //Get the keycloak configuration
// let keycloak = Keycloak('./keycloak.json');
// //Initialization of the keycloak instance
// keycloak.init({ onLoad: 'login-required' }).success((authenticated) => {
// if (!authenticated) {
// window.location.reload();
// } else {
// console.info("Authenticated");
// }
ReactDOM.render(
  <React.Fragment>

    {/* <LoginContext.Provider> */}
    
      <ProductsContextProvider>
        <CartContextProvider>
           <App/>
          
        </CartContextProvider>
      </ProductsContextProvider>
  {/* </LoginContext.Provider> */}
        </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register();


//React Render on authentication
// ReactDOM.render(, document.getElementById('root'));
//store authentication tokens in sessionStorage for usage in app
// sessionStorage.setItem('authentication', keycloak.token);
// sessionStorage.setItem('refreshToken', keycloak.refreshToken);
//to regenerate token on expiry
// setTimeout(() => {
// keycloak.updateToken(70).success((refreshed) => {
// if (refreshed) {
// console.debug('Token refreshed' + refreshed);
// } else {
// console.warn('Token not refreshed, valid for '
// + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
// }
// }).error(() => {
// console.error('Failed to refresh token');
// });
// }, 60000)
// }).error(() => {
// console.error("Authenticated Failed");
// });

