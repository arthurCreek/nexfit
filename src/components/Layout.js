import React, { useReducer, useEffect } from 'react';
import cartReducer from '../reducers/cart-reducer';
import CartContext from '../context/cart-context';
import Navbar from './navbar/Navbar';
import '../styles/styles.scss';

const Layout = (props) => {
    const [items, dispatch] = useReducer(cartReducer, []);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));

        if (items) {
            console.log(items);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    return (
        <CartContext.Provider value={{items, dispatch}}>
            <Navbar />
            <main>{props.children}</main>
        </CartContext.Provider>
    )

};

export default Layout;