import React, {useState, useContext} from 'react';
import CartContext from '../../context/cart-context';
import { Link } from 'next/link';


const CartItem = ( {name, size, colorSelected, amount, cost, imgSrc} ) => {
    const { items, dispatch } = useContext(CartContext);

    {/* 
        Edit single item in cart
    */}
    function editCartItem(amount) {
        dispatch({
            type: 'EDIT_ITEM',
            data: {
                name,
                imgSrc,
                colorSelected,
                size: size || 'none',
                cost,
                amount: amount
            }
        })
    }

    {/* 
        Remove item quantity
    */}
    function removeItemFromCart(item) {
        dispatch({
            type: 'REMOVE_ITEM',
            data: {
                name: name,
                imgSrc: imgSrc,
                colorSelected: colorSelected,
                size: size || 'none',
                cost: cost,
                amount: amount
            }
        })
    }

    {/* 
        Add single item in cart
    */}
    function addItem() {
        items.forEach(item => {
            if(item.name === name && item.imgSrc === imgSrc && item.size === size) {
                editCartItem(1);
                return;
            }
        });
    }

    {/* 
        Remove quantity from item or remove whole product
    */}
    function removeItem() {
        items.forEach(item => {
            if(item.name === name && item.imgSrc === imgSrc && item.size === size) {
                if(item.amount === 1) {
                    removeItemFromCart();
                } else {
                    editCartItem(-1);
                    return;
                }

            }
        });
    }

    {/* 
        Remove whole item from cart
    */}
    function removeItemRow() {
        dispatch({
            type: 'REMOVE_ITEM',
            data: {
                name,
                imgSrc,
                colorSelected,
                size: size || 'none',
                cost,
                amount: amount
            }
        })
    }



    return (
        <div className="cart-item__container">
            <div className="cart-item__image-amount">
                <img src={imgSrc} alt={name} className="cart-item__image"/>
                <p> <span><button className="btn-add-remove" onClick={removeItem}>-</button></span> <span className="cart-item__amount">{amount}</span> <button className="btn-add-remove" onClick={addItem}>+</button> </p>
            </div>

            <div className="cart-item__text">
                <h3>{name}</h3>
                <p>Color/Size: {colorSelected.toUpperCase()} / {size.toUpperCase()}</p>
                <p>Subtotal: ${amount * cost}.00</p>
                <a onClick={removeItemRow} className="cart-item__remove-item-row">Remove</a>
            </div>
        </div>
    )

} 

export default CartItem;