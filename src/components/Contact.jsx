import { render } from "@testing-library/react";
import React, { Component } from "react";
import { MDBNavbarBrand, MDBNavbar, MDBInput } from "mdbreact";

class Contact extends Component {
  render() {
    return (
      <>
        <MDBNavbar
          style={{
            color: "black",
            justifyContent: "center",
            width: "auto",
          }}
        >
          <MDBNavbarBrand
            className="h1-responsive font-weight-bold text-center my-2"
            style={{ fontSize: "30px" }}
          >
            CONTACT US
          </MDBNavbarBrand>
        </MDBNavbar>

        <div className="row" style={{ paddingTop: "40px", width: "100rem" }}>
          <div
            className="col-md-9 mb-md-10 mb-19"
            style={{ paddingLeft: "40px" }}
          >
            <form id="contact-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <MDBInput
                      className="form-control"
                      label="Name"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <MDBInput
                      className="form-control"
                      label="Email"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <MDBInput
                      className="form-control"
                      label="Subject"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <MDBInput
                      className="form-control"
                      label="Your Message"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                  </div>
                </div>
              </div>
            </form>

            <div className="text-center text-md-left">
              <a
                className="btn btn-primary"
                //   onClick="document.getElementById('contact-form').submit();"
              >
                Send
              </a>
            </div>
            <div className="status"></div>
          </div>
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <p>Karachi, CA 94126, Pakistann</p>
              </li>

              <li>
                <i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 92 214 567 89</p>
              </li>

              <li>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@hulmsolution.com</p>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default Contact;
