import React from 'react';
import './Product.css'
const Product = (props) => {
    const {addToCart, product} = props;
    const {name,picture,price} =props.product;
    return (
        <div className='product'>
            <img src={picture} alt="product-pic" />
            <h2> {name} </h2>
            <h4> ${price} </h4>
            <div onClick={()=>addToCart(product)}  className="btn btn-primary"> Add To Cart</div>
            
        </div>
        
    );
};

export default Product;