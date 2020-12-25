import React, { Component, useContext, useEffect } from "react";
import { MDBInput, MDBRow, MDBCol, MDBBtn, MDBContainer } from "mdbreact";
import Home from "./Home";
import Keycloak from "keycloak-js";
import Products from "./Products";
import Nav from "./Nav";
import LoginContext from "../components/contexts/LoginContext";
import { history } from "react-dom";

const Login = (props) => {
  //Login Form
  const loginContext = useContext(LoginContext);

  // render() {
  //   return (
  // <div>
  //   <MDBContainer style={{ padding: "80px" }}>
  //     <MDBRow>
  //       <MDBCol md="12">
  //         <form>
  //           <p className="h3 text-center ">Sign in</p>
  //           <div className="grey-text">
  //             <MDBInput
  //               label="Type your email"
  //               icon="envelope"
  //               group
  //               type="email"
  //               validate
  //               error="wrong"
  //               success="right"
  //             />
  //             <MDBInput
  //               label="Type your password"
  //               icon="lock"
  //               group
  //               type="password"
  //               validate
  //             />
  //           </div>
  //           <div className="text-center">
  //             <MDBBtn>Login</MDBBtn>
  //           </div>
  //         </form>
  //       </MDBCol>
  //     </MDBRow>
  //   </MDBContainer>
  // </div>

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     keycloak: null,
  //     authenticated: false,
  //   };
  // }

  //keycloack intialisation
  // componentDidMount() {
  //   const loginContext = useContext(LoginContext);
  //   console.log("loginContext", loginContext);
  //   if (loginContext) {
  //     this.props.history.push({
  //       pathname: "/",
  //     });
  //   } else {
  //     const keycloak = Keycloak("./keycloak.json");
  //     keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
  //       localStorage.setItem("authenticated", authenticated);
  //       loginContext = authenticated;
  //       this.setState({ keycloak: keycloak, authenticated: authenticated });
  //       this.props.history.push({
  //         pathname: "/",
  //       });
  //     });
  //   }
  // }

  useEffect(() => {
    console.log("loginContext", loginContext);
    if (loginContext.authenticated) {
      props.history.push({
        pathname: "/",
      });
    } else {
      props.login();
    }
  }, []);

  // const = function logout() {
  //   Keycloak.logout(
  //     "http://localhost:8180/auth/realms/Hulm/protocol/openid-connect/logout?redirect_uri=encodedRedirectUri"
  //   );
  // };

  // render() {
  // console.log(logout);
  // if (this.state.keycloak) {
  //   if (this.state.authenticated)
  //     return (
  //     );
  //   else return <div>Unable to authenticate!</div>;
  // }
  return (
    <LoginContext.Consumer>
      {
        ({ authenticated }) => <Home />
        // <div>Initializing Keycloak...</div>
      }
    </LoginContext.Consumer>
  );
  // }
};

export default Login;
