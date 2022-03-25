import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name,picture,price} =props.product;
    return (
        <div className='product bg-white'>
            <img src={picture} alt="" />
            <h2> {name} </h2>
            <h4> ${price} </h4>
        </div>
    );
};

export default Product;