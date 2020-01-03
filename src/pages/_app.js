import React, { useReducer, useEffect } from 'react';
import cartReducer from '../reducers/cart-reducer';
import CartContext from '../context/cart-context';
import Layout from '../components/Layout';
import App from 'next/app';


/**
    Wrapper for app layout
 */
class NexfitApp extends App {
    

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Layout>
                <Component {...pageProps}></Component>
            </Layout>
        )
    }
}

export default NexfitApp;