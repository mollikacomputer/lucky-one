import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('fakedata.json')
        .then(response=>response.json())
        .then(data=>setProducts(data))
    },[]);
    const [cart, setCart]= useState([]);
    const addToCart = (product)=>{
        const newCart = [...cart, product]
        if(cart.length<=3){
            setCart(newCart);
        }else{
            alert('You can add only 4 items');
        } 
    }
    return (
        <div className='shop row'>
            <div className='single-product bg-light'>
                {
                    products.map(product=> <Product
                    key={product.id}
                    product={product}
                    addToCart ={addToCart}
                    ></Product> )
                }
            </div>
            <div>
                <Cart cart={cart} ></Cart>
            </div>


        </div>
    
    );
};

export default Shop;