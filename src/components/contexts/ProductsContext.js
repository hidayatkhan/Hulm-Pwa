import React, { createContext, useState,useEffect } from 'react';
import { dummyProducts } from '../services/dummy';
export const ProductsContext = createContext()

const ProductsContextProvider = ({children}) => {

    const [products, setProducts] = useState([]);

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
        setProducts(json);
        // setLoaded(true);
      });
  }, []);
    return ( 
        <ProductsContext.Provider value={{products}} >
            { children }
            {/* {console.log("product context provide children",children)} */}
        </ProductsContext.Provider>
     );
}
 
export default ProductsContextProvider;