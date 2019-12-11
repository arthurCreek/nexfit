import React from 'react';
import CartContext from '../../context/cart-context';
import { Link } from 'next/link';


const FinalCart = ( {name, size, colorSelected, amount, cost, imgSrc} ) => {


    return (
        <div className="cart-item__container cart-item__container--final">
            <div className="cart-item__image-amount">
                <img src={imgSrc} alt={name} className="cart-item__image"/>
            </div>

            <div className="cart-item__text">
                <h3>{name}</h3>
                <p>Color/Size: {colorSelected.toUpperCase()} / {size.toUpperCase()}</p>
                <p>Subtotal: ${amount * cost}.00</p>
                <p>Quantity: {amount}</p>
            </div>
        </div>
    )

} 

export default FinalCart;