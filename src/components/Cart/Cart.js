import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    // console.log("in Cart: ",cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * quantity;
        shipping = shipping + product.shipping;
    }
    // console.log("Quan: ",quantity);
    const tax = (total * 0.10).toFixed(2);
    const grandTotal= total+shipping+parseFloat(tax);
    return (
        <div className='cart'>
            <h4>Order Sumarry</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax} </p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;