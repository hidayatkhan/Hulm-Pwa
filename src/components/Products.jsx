import React, { useContext, useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
  MDBNavLink,
} from "mdbreact";
import { render } from "@testing-library/react";
import Keycloak from "keycloak-js";
import { CartContext } from "./contexts/CartContext";

const Products = (props) => {
  const [items, setItem] = useState([]);
  const [isloaded, setLoaded] = useState(false);
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: [],
  //     isloaded: false,
  //   };
  // }
  const { addProduct, cartItems, increase } = useContext(CartContext);

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };
  // componentDidMount() {
  //   //  const apiUrl= "http://localhost:8083/Apps/PMS/Hulm/7b64206f-1435-438a-8b1c-42aee9d0cec3/ProductCatalogService/productSpecifications";
  //   //   fetch('https://pokeapi.co/api/v2/pokemon/pikachu/')
  useEffect(() => {
    fetch(
      "http://localhost:8083/Apps/PMS/Hulm/7b64206f-1435-438a-8b1c-42aee9d0cec3/ProductCatalogService/productSpecifications",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer token",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        // console.log("Data api", json);
        // this.setState({
        //   isloaded: true,
        //   items: json,
        // });
        setItem(json);
        setLoaded(true);
      });
  }, []);
  //   fetch(
  //     "http://localhost:8083/Apps/PMS/Hulm/7b64206f-1435-438a-8b1c-42aee9d0cec3/ProductCatalogService/productSpecifications",
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //         Authorization: "Bearer token",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       // console.log("Data api", json);
  //       this.setState({
  //         isloaded: true,
  //         items: json,
  //       });
  //     });
  // }

  // render() {
  // console.log("Products props", this.props);

  // var { isloaded, items } = this.state;
  // console.log("items", items);

  if (!isloaded) {
    return <div>loading</div>;
  } else
    return (
      <MDBRow style={{ margin: "20px" }}>
        {items.length &&
          items.map((item) => (
            <MDBCard
              key={item.POID}
              style={{ width: "22rem", padding: "15px" }}
            >
              {/* {console.log("attachments", item.attachments[0].url)} */}
              <img
                className="img-fluid"
                src={
                  // "https://www.zohowebstatic.com/sites/default/files/c-apps-inventory-management.jpg"
                  "https://" + item.attachments[0].url
                }
              />
              <MDBCardBody>
                <MDBCardTitle>{item.name} </MDBCardTitle>
                <MDBCardText>{item.description} </MDBCardText>
                {/* <MDBBtn
                  style={{
                    marginTop: "10px",
                    color: "white",
                    backgroundColor: "black",
                  }}
                  href="#"
                >
                  Details
                </MDBBtn>
                <MDBBtn
                  style={{
                    marginTop: "20px",
                    color: "white",
                    backgroundColor: "black",
                  }}
                  href="#"
                  onClick={() => addProduct(item)}
                >
                  Add To Cart
                </MDBBtn> */}
                <MDBNavLink to="/" className="btn btn-link btn-sm mr-2">
                  Details
                </MDBNavLink>

                {isInCart(item) && (
                  <MDBBtn
                    onClick={() => increase(item)}
                    // className="btn btn-outline-primary btn-sm"
                  >
                    Add more
                  </MDBBtn>
                )}

                {!isInCart(item) && (
                  <MDBBtn
                    onClick={() => addProduct(item)}
                    className="btn btn-primary btn-sm"
                  >
                    Add to cart
                  </MDBBtn>
                )}
              </MDBCardBody>
            </MDBCard>
          ))}
        {/* <MDBCard style={{ width: "22rem", padding: "20px" }}>
            {" "}
            <MDBCardImage
              className="img-fluid"
              src="./assets/product2.png"
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
              <MDBBtn href="#">Click</MDBBtn>
            </MDBCardBody>
          </MDBCard>
          <MDBCard style={{ width: "22rem", padding: "20px" }}>
            <MDBCardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
              <MDBBtn href="#">Click</MDBBtn>
            </MDBCardBody>
          </MDBCard> */}
      </MDBRow>
    );
};
// }

export default Products;
