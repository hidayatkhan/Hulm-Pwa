import React, { Component } from "react";
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbar,
  MDBNavbarBrand,
} from "mdbreact";
import Products from "./Products";
class ProductTab extends Component {
  state = {
    activeItem: "1",
  };

  toggle = (tab) => (e) => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab,
      });
    }
  };

  render() {
    // console.log("producta Tab props", this.props.data);
    return (
      <>
        <MDBNavbar
          style={{
            color: "Black",
            justifyContent: "center",
            fontSize: "11rem",
            fontWeight: "bold",
          }}
        >
          <MDBNavbarBrand
            className="h1-responsive font-weight-bold text-center my-2"
            style={{ fontSize: "30px" }}
          >
            PRODUCTS
          </MDBNavbarBrand>
        </MDBNavbar>
        {/* <MDBContainer
          style={{
            backgroundColor: "#20232a",
            height: "200px",
            marginTop: "-2.5rem",
          }}
        >
          <MDBNav
            style={{ backgroundColor: "#20232a", height: "60px" }}
            className="nav-tabs mt-5"
          >
            <MDBNavItem>
              <MDBNavLink
                style={{
                  width: "220px",
                  padding: "20px",
                  margin: "2px",
                  height: "50px",
                }}
                link
                to="#"
                active={this.state.activeItem === "1"}
                onClick={this.toggle("1")}
                role="tab"
              >
                All Products
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                style={{
                  width: "220px",
                  padding: "20px",
                  margin: "2px",
                  height: "50px",
                }}
                link
                to="#"
                active={this.state.activeItem === "2"}
                onClick={this.toggle("2")}
                role="tab"
              >
                Business Vertical 1
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                style={{
                  width: "220px",
                  padding: "20px",
                  margin: "2px",
                  height: "50px",
                }}
                link
                to="#"
                active={this.state.activeItem === "3"}
                onClick={this.toggle("3")}
                role="tab"
              >
                Business Vertical 2
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                style={{
                  width: "220px",
                  padding: "20px",
                  margin: "2px",
                  height: "50px",
                }}
                link
                to="#"
                active={this.state.activeItem === "4"}
                onClick={this.toggle("4")}
                role="tab"
              >
                Business Vertical 3
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                style={{
                  width: "210px",
                  padding: "20px",
                  margin: "2px",
                  height: "50px",
                }}
                link
                to="#"
                active={this.state.activeItem === "5"}
                onClick={this.toggle("5")}
                role="tab"
              >
                Business Vertical 4
              </MDBNavLink>
            </MDBNavItem>
          </MDBNav>
          <MDBTabContent activeItem={this.state.activeItem}>
            <MDBTabPane tabId="1" role="tabpanel">
              <p className="mt-2">
                Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                voluptate odit minima. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Nihil odit magnam minima, soluta doloribus
                reiciendis molestiae placeat unde eos molestias.
              </p>
              <p>
                Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                voluptate odit minima. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Nihil odit magnam minima, soluta doloribus
                reiciendis molestiae placeat unde eos molestias.
              </p>{" "}
            </MDBTabPane>
            <MDBTabPane tabId="2" role="tabpanel">
              <p className="mt-2">
                Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                voluptate odit minima. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Nihil odit magnam minima, soluta doloribus
                reiciendis molestiae placeat unde eos molestias.
              </p>
              <p>
                Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                voluptate odit minima. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Nihil odit magnam minima, soluta doloribus
                reiciendis molestiae placeat unde eos molestias.
              </p>
            </MDBTabPane>
            <MDBTabPane tabId="3" role="tabpanel">
              <p className="mt-2">
                Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                voluptate odit minima. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Nihil odit magnam minima, soluta doloribus
                reiciendis molestiae placeat unde eos molestias.
              </p>
            </MDBTabPane>
            <MDBTabPane tabId="4" role="tabpanel">
              <p className="mt-2">
                Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                voluptate odit minima. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Nihil odit magnam minima, soluta doloribus
                reiciendis molestiae placeat unde eos molestias.
              </p>
              <p>
                Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                voluptate odit minima. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Nihil odit magnam minima, soluta doloribus
                reiciendis molestiae placeat unde eos molestias.
              </p>
            </MDBTabPane>
            <MDBTabPane tabId="5" role="tabpanel">
              <p className="mt-2">
                Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                voluptate odit minima. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Nihil odit magnam minima, soluta doloribus
                reiciendis molestiae placeat unde eos molestias.
              </p>
              <p>
                Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                voluptate odit minima. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Nihil odit magnam minima, soluta doloribus
                reiciendis molestiae placeat unde eos molestias.
              </p>
            </MDBTabPane>
          </MDBTabContent>
        </MDBContainer> */}

        <MDBContainer style={{ Minwidth: "90rem" }}>
          <MDBNav className="nav-tabs  ">
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={this.state.activeItem === "1"}
                onClick={this.toggle("1")}
                role="tab"
              >
                All Products
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={this.state.activeItem === "2"}
                onClick={this.toggle("2")}
                role="tab"
              >
                Business Vertical 1
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                link
                to="#"
                active={this.state.activeItem === "3"}
                onClick={this.toggle("3")}
                role="tab"
              >
                Businerss Vertical 2
              </MDBNavLink>
            </MDBNavItem>
          </MDBNav>
          <MDBTabContent activeItem={this.state.activeItem}>
            <MDBTabPane tabId="1" role="tabpanel">
              <p className="mt-2">
                <Products data={this.props} />
              </p>
            </MDBTabPane>
            <MDBTabPane tabId="2" role="tabpanel">
              <p className="mt-2">
                <Products data={this.props} />
                <Products data={this.props} />
              </p>
            </MDBTabPane>
            <MDBTabPane tabId="3" role="tabpanel">
              <p className="mt-2">
                <Products /> <Products /> <Products />
              </p>
            </MDBTabPane>
          </MDBTabContent>
        </MDBContainer>
      </>
    );
  }
}
export default ProductTab;
