import React from 'react';

const AnswerAnotherOne = () => {
    return (
        <div>
            <h2> How useState Work?</h2>
            <p><b>Answer</b> useState is build in react function. 
            its look like `
             <mark>const [user, setUser]=useState([]);</mark>
             ` 
             
             use state have two function firs function use to get data and second data use set data. when we can use outside of data or server data then need to set data and get data with useState build function. `useState([])` a blank array its call one time loop data if some times we can use some array get more time calling data. some example given below :
            ` 
            const [product, setProduct] = useState([]);
            <mark>const newProduct = [...product, item];</mark>
            setProduct(newProduct); 
            // now set product automatically
            and auto store in product variable; now this product use anywhere
            `
             </p>
        </div>
    );
};

export default AnswerAnotherOne;