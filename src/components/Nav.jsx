// import React from "react";
// import {
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarNav,
//   MDBNavbarToggler,
//   MDBCollapse,
//   MDBNavItem,
//   MDBNavLink,
// } from "mdbreact";
import "../App.css";
import { Link } from "react-router-dom";
import { CartIcon } from "./icons/index";

// class Nav extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       collapse: false,
//     };
//     this.onClick = this.onClick.bind(this);
//   }

//   onClick() {
//     this.setState({
//       collapse: !this.state.collapse,
//     });
//   }

//   render() {
//     const bgcolor = { backgroundColor: "" };
//     const container = { height: 500 };
//     const fcolor = { color: "#1111" };
//     return (
//       <div>
//         <header style={{ backgroundColor: "#20232a" }}>
//           <MDBNavbar
//             style={{
//               height: "80px",
//               fontSize: "calc(3px + 2vmin)",
//             }}
//             dark
//             expand="md"
//             scrolling
//           >
//             <MDBNavbarBrand className="h1-responsive font-weight-bold text-center my-4">
//               <Link to="/">
//                 <strong>Hulm</strong>
//               </Link>
//             </MDBNavbarBrand>
//             <MDBNavbarToggler onClick={this.onClick} />
//             <MDBCollapse isOpen={this.state.collapse} navbar>
//               <MDBNavbarNav right>
//                 <MDBNavItem active>
//                   <MDBNavLink to="/">Home</MDBNavLink>
//                 </MDBNavItem>
//                 <MDBNavItem>
//                   <MDBNavLink to="/products">Products</MDBNavLink>
//                 </MDBNavItem>
//                 <MDBNavItem>
//                   <MDBNavLink to="/services">Services</MDBNavLink>
//                 </MDBNavItem>
//                 <MDBNavItem>
//                   <MDBNavLink to="/contact">Contact Us</MDBNavLink>
//                 </MDBNavItem>
//                 <MDBNavItem>
//                   <MDBNavLink to="/Faqs">FAQs</MDBNavLink>
//                 </MDBNavItem>
//                 <MDBNavItem>
//                   <MDBNavLink to="/about">About Us</MDBNavLink>
//                 </MDBNavItem>
//                 <MDBNavItem>
//                   <MDBNavLink to="/Signup">Sign Up</MDBNavLink>
//                 </MDBNavItem>
//                 <MDBNavItem>
//                   <MDBNavLink to="/Login">Login</MDBNavLink>
//                 </MDBNavItem>
//               </MDBNavbarNav>
//             </MDBCollapse>
//           </MDBNavbar>
//         </header>
//       </div>
//     );
//   }
// }

// export default Nav;

import React, { useContext, useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBMask,
  MDBView,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import { CartContext } from "./contexts/CartContext";
import { LoginContext } from "./Login";

const Nav = () => {
  const { itemCount } = useContext(CartContext);

  // static contextType = CartContext;
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     collapse: false,
  //     isWideEnough: false,
  //   };
  //   this.onClick = this.onClick.bind(this);
  // }
  const [isCollapse, setCollapse] = useState(false);
  const [isWideEnough, setWideEnough] = useState(false);

  // onClick() {
  //   this.setState({
  //     collapse: !this.state.collapse,
  //   });
  // }

  // render() {
  return (
    // <LoginContext.Consumer>
    //   {(value) => {
    //     console.log("Nav context", value);
    // return (
    <div>
      <header
        className="header"
        style={{
          minHeight: "82px",
          fontSize: "1.2rem",
        }}
      >
        <MDBNavbar color="black" dark fixed="top" expand="lg" scrolling>
          <MDBNavbarBrand>
            <a href="" className="logo">
              <span className="grey-color"> &lt;</span>
              <span className="logo-name">Hulm</span>
              <span className="grey-color">/&gt;</span>
            </a>
          </MDBNavbarBrand>
          {!isWideEnough && (
            <MDBNavbarToggler onClick={() => setCollapse(!isCollapse)} />
          )}
          <MDBCollapse isOpen={isCollapse} navbar>
            <MDBNavbarNav right>
              <MDBNavItem active>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink to="/products">Products</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/services">Services</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/contact">Contact Us</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/Faqs">FAQs</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/about">About Us</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/Signup">Sign Up</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink to="/Login">Login</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink to="/cart">
                  {" "}
                  <CartIcon /> Cart ({itemCount})
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/">Dashborad</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </header>
    </div>
    // );
    //   }}
    // </LoginContext.Consumer>
  );
};
// }

export default Nav;
