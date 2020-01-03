import React, { useReducer, useEffect } from 'react';
import cartReducer from '../reducers/cart-reducer';
import CartContext from '../context/cart-context';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import '../styles/styles.scss';

const Layout = (props) => {
    const [items, dispatch] = useReducer(cartReducer, []);

    {/* 
        Retreive items from local storage if stored
    */}
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));

        if (items) {
            dispatch({ type: 'POPULATE_CART', items});
        }
    }, [])

    {/* 
        Set cart items based on localstorage
    */}
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    return (
        <CartContext.Provider value={{items, dispatch}}>
            <Navbar />
            <main>{props.children}</main>
            <Footer />
        </CartContext.Provider>
    )

};

export default Layout;