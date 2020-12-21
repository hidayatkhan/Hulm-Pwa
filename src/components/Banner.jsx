import React, { Component } from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";

class Banner extends Component {
  render() {
    return (
      <MDBCarousel
        style={{}}
        activeItem={1}
        length={4}
        showControls={true}
        showIndicators={true}
        className="z-depth-6"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={"assets/banner1.png"}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={"assets/banner2.png"}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={"assets/banner3.png"}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src={"assets/banner4.png"}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    );
  }
}

export default Banner;
