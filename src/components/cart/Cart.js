import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} =props;
    let productName = '';
    for(const product of cart){
        productName = product.name;
    }
    return (
        <div className='cart bg-light ms-1'>
            <div className='cart-info' >
                <p> {productName} </p>
            </div>
            <h6> this is cart </h6>
            <div className="btn btn-warning m-2"> Click to get One </div>
            <div className="btn btn-primary"> select again </div>
        </div>
    );
};

export default Cart;