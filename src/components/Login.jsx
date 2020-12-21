import React, { Component } from "react";
import { MDBInput, MDBRow, MDBCol, MDBBtn, MDBContainer } from "mdbreact";
import Home from "./Home";
import Keycloak from "keycloak-js";
import Products from "./Products";
import Nav from "./Nav";
export const LoginContext = React.createContext(); // added this

class Login extends Component {
  //Login Form

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

  constructor(props) {
    super(props);
    this.state = {
      keycloak: null,
      authenticated: false,
    };
  }

  //keycloack intialisation
  componentDidMount() {
    const keycloak = Keycloak("./keycloak.json");
    keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
      this.setState({ keycloak: keycloak, authenticated: authenticated });
    });
  }

  const = function logout() {
    Keycloak.logout(
      "http://localhost:8180/auth/realms/Hulm/protocol/openid-connect/logout?redirect_uri=encodedRedirectUri"
    );
  };

  render() {
    // console.log(logout);
    if (this.state.keycloak) {
      if (this.state.authenticated)
        return (
          <LoginContext.Provider value={this.state}>
            {" "}
            <Home />
          </LoginContext.Provider>
        );
      else return <div>Unable to authenticate!</div>;
    }
    return <div>Initializing Keycloak...</div>;
  }
}

export default Login;
