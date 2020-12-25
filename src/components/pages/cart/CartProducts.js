import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

import CartItem from './CartItem';
// import styles from './CartProducts.module.scss';

const CartProducts = () => {

    const { cartItems } = useContext(CartContext);
console.log("cart item ",cartItems)
    return ( 
        <div >
            <div className="card card-body border-0">

                {
                    cartItems.map(product =>  <CartItem key={product.id} product={product}/>)
                }

            </div>
        </div>

     );
}
 
export default CartProducts;