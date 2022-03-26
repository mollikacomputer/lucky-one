import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart, chooseAgain,selectedOneItem} =props;
    return (
        <div className='cart bg-light ms-1'>
            <div className='cart-info' id='cart-info' >
            
            <p>     
            {
                cart.map(item =>( <h6><img src={item.picture} alt="" /> {item.name}</h6>))
            } 
            </p>
            </div>
            <h6> this is cart </h6>
            <div onClick={()=>selectedOneItem()} className="btn btn-warning m-2"> Click to get One </div>
            <div onClick={()=>chooseAgain()} className="btn btn-primary"> Choose again </div>
        </div>
    );
};

export default Cart;