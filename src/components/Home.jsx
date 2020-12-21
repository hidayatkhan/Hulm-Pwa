import React, { Component } from "react";
import Banner from "./Banner";
import Services from "./Services";
import ProductTab from "./ProductTab";
// import Products from "./Products";
// import Top from "./TopButton/Top";
import About from "./About";
import Contact from "./Contact";
import { LoginContext } from "./Login";
import Nav from "./Nav";
import ProductsGrid from "./pages/store/ProductsGrid";

class Home extends Component {
  render() {
    console.log("Home props", this.props);
    return (
      // <LoginContext.Consumer>
      //   {(data) =>{ console.log("home context", data)}

      <React.Fragment>
        <Banner />
        <ProductsGrid />
        <ProductTab />
        <Services />
        <Contact />
        <About />
      </React.Fragment>
      // </LoginContext.Consumer>
      // <LoginContext.Consumer>
      //   {(value) => {
      //     console.log(value);
      //     return <div>{!this.value ? <Banner /> : <ProductsGrid />}</div>;
      //   }}
      // </LoginContext.Consumer>
    );
  }
}
export default Home;
