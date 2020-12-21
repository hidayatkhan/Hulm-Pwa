import React, { Component, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import Keycloack from "keycloak-js";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.toggleForm = this.toggleForm.bind(this);
    this.state = {
      isToggle: false,
    };
  }
  toggleForm(param) {
    this.setState({ isToggle: param === "ORG" ? false : true });
  }

  render() {
    const { isToggle } = this.state;
    return (
      <>
        <MDBContainer style={{ padding: "80px" }}>
          <MDBRow>
            <MDBCol md="12">
              <form>
                <p className="h3 text-center ">Sign up</p>
                <div className="grey-text">
                  <MDBBtn
                    onClick={() => this.toggleForm("ORG")}
                    className={!isToggle ? "active" : ""}
                  >
                    Organization
                  </MDBBtn>
                  <MDBBtn
                    onClick={() => this.toggleForm("INV")}
                    className={isToggle ? "active" : ""}
                  >
                    {" "}
                    Indivisual
                  </MDBBtn>
                  {this.state.isToggle ? (
                    <div>
                      <MDBInput
                        label="Name"
                        icon="building"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Business Type"
                        icon="building"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                    </div>
                  ) : (
                    <MDBInput
                      label="Organization Name"
                      icon="building"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                  )}
                  <MDBInput
                    label="Organization Type"
                    icon="briefcase"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Owner Name"
                    icon="user-tie"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                  <MDBInput
                    label="Confirm Password"
                    icon="user-lock"
                    group
                    type="text"
                    validate
                  />
                  <MDBInput
                    label="Contact"
                    icon="user-friends"
                    group
                    type="text"
                    validate
                  />
                  <label
                    md="12"
                    // label="Address"
                    // icon="address-card"
                    // type="tEXT"
                    // validate
                  >
                    Address :
                  </label>
                  <ul>
                    <li>
                      <MDBInput
                        label="Office"
                        icon="fas fa-briefcase"
                        group
                        type="text"
                        validate
                      />
                    </li>
                    <li>
                      <MDBInput
                        label="Building"
                        icon="fas fa-building"
                        group
                        type="text"
                        validate
                      />
                    </li>
                    <li>
                      <MDBInput
                        label="Street"
                        icon="fas fa-road"
                        group
                        type="text"
                        validate
                      />
                    </li>
                    <li>
                      <MDBInput
                        label="Distric"
                        icon="fas fa-warehouse"
                        group
                        type="text"
                        validate
                      />
                    </li>
                    <li>
                      <MDBInput
                        label="City"
                        icon="fas fa-city"
                        group
                        type="text"
                        validate
                      />
                    </li>
                    <li>
                      <MDBInput
                        label="Country"
                        icon="fas fa-flag"
                        group
                        type="text"
                        validate
                      />
                    </li>
                  </ul>

                  <label
                    md="12"
                    // label="Address"
                    // icon="address-card"
                    // type="tEXT"
                    // validate
                  >
                    Prefered Payment Method :
                  </label>
                  <ul>
                    <li>
                      <MDBInput
                        label="Credit Card"
                        icon="Fas fa-credit-card"
                        group
                        type="text"
                        validate
                      />
                    </li>
                    <li>
                      <MDBInput
                        label="Debit Card"
                        icon="far fa-credit-card"
                        group
                        type="text"
                        validate
                      />
                    </li>
                    <li>
                      <MDBInput
                        label="Paypal"
                        icon="fas fa-money-check"
                        group
                        type="text"
                        validate
                      />
                    </li>
                    <li>
                      <MDBInput
                        label="Bitcoin"
                        icon="fas fa-coins"
                        group
                        type="text"
                        validate
                      />
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <MDBBtn color="primary">Register</MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}

export default Signup;
