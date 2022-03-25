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
    return (
        <div className='shop'>
            <div className='single-product bg-light'>
                {
                    products.map(product=> <Product
                    key={product.id}
                    product={product}
                    ></Product> )
                }
                <p> shop component</p>
            </div>
            <div>
                <Cart></Cart>
            </div>


        </div>
    
    );
};

export default Shop;