import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
const Product = (props) => {
    const {addToCart, product} = props;
    const {name,picture,price} =props.product;
    return (
        <div className='product'>
            <img src={picture} alt="product-pic" />
            <h2> {name} </h2>
            <h4> ${price} </h4>
            <div onClick={()=>addToCart(product)}  className="btn btn-primary"> 
                Add To Cart {' '}
                <FontAwesomeIcon icon={faShoppingCart} />
                </div>
            
        </div>
        
    );
};

export default Product;