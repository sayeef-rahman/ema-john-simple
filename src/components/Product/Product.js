import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {product, handleAddToCart} = props;
    const {name,id,img, seller, price, ratings}=product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Manufacturer: {seller}</p>
                <p>Price: ${price}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button onClick={()=> props.handleAddToCart(product)} className='btn-cart'>
                    <p className='btn-text'>Add To Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Product;