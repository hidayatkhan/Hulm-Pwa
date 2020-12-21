import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class About extends Component {
  render() {
    return (
      <MDBFooter
        style={{ backgroundColor: "#20232a" }}
        className="font-small pt-4 mt-4"
      >
        <MDBContainer
          fluid
          className="text-center text-md-left"
          style={{ padding: "99px" }}
        >
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">
                {" "}
                <u>
                  {" "}
                  <i>One Stop For your Business Need</i>
                </u>
              </h5>
              <h6>
                Hulm Solution Provides state of the art POS, Inventory Managment
                systems, Cloud ERP solution for different Businesses.
              </h6>
            </MDBCol>
            <MDBCol md="6">
              <h2 className="title">Links</h2>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">Link 1</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 2</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 3</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.hulmsoution.com"> Hulmsolution.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

export default About;
