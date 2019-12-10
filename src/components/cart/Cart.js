import React from 'react';
import Link from 'next/link';

const Cart = () => (
    <header className="header">
        <div className="header__container">
            <img src="" alt="company logo" className="logo" id="header-logo" />
            <img src="" alt="menu icon" className="header__menu-logo"/>
            <div className="heaver__nav-container">
                <nav className="header__nav">
                    <ul className="header__list">
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="/men"><a>Men</a></Link></li>
                        <li><Link href="/women"><a>Women</a></Link></li>
                    </ul>
                </nav>
            </div>
            <div>
                <img src="/icons/shopping_cart.png" />
            </div>
        </div>
    </header>
);

export default Cart;
