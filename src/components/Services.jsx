import React, { Component } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBNavbar,
  MDBNavbarBrand,
  MDBRow,
} from "mdbreact";

class Services extends Component {
  render() {
    return (
      <>
        <MDBNavbar
          style={{
            color: "black",
            justifyContent: "center",
            // fontSize: "7rem",
          }}
        >
          <MDBNavbarBrand
            className="h1-responsive font-weight-bold text-center my-2"
            style={{ fontSize: "30px" }}
          >
            SERVICES
          </MDBNavbarBrand>
        </MDBNavbar>
        <MDBRow style={{ margin: "30px" }}>
          <MDBCard style={{ width: "22rem", padding: "20px" }}>
            <MDBCardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </MDBCardText>
              <MDBBtn href="#">MDBBtn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
          <MDBCard style={{ width: "22rem", padding: "20px" }}>
            <MDBCardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </MDBCardText>
              <MDBBtn href="#">MDBBtn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
          <MDBCard style={{ width: "22rem", padding: "20px" }}>
            <MDBCardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </MDBCardText>
              <MDBBtn href="#">MDBBtn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
          <MDBCard style={{ width: "22rem", padding: "20px" }}>
            <MDBCardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </MDBCardText>
              <MDBBtn href="#">MDBBtn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </>
    );
  }
}

export default Services;
