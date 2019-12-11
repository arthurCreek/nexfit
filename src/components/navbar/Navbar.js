import React, { useState, useContext, useEffect } from 'react';
import CartContext from '../../context/cart-context';
import CartItem from '../cart/cartItem';
import Link from 'next/link';

const uuidv4 = require('uuid/v4');

const Navbar = () => {
    const { items, dispatch } = useContext(CartContext);
    const [totalItems, setTotalItems] = useState(0);
    let total = 0;

    useEffect(() => {
        if (items.length > 0) {
            let totalItemTemp = 0;
            items.forEach(item => {
                totalItemTemp += item['amount'];
            });
            setTotalItems(totalItemTemp);
        }
        
    }, [items]);

    function cartToggle() {
        document.querySelector('.cart__drawer').classList.toggle('cart__toggle');
    }
    function menuToggle() {
        document.querySelector('.menu__drawer').classList.toggle('menu__toggle');
    }

    return (
        <section>
            <header className="header">
                <div className="header__container">
                    <img src="/icons/menu_burger.png" alt="menu icon" className="header__menu-logo" onClick={menuToggle}/>
                    <div >
                        <Link href="/"><a className="heaver__brand">NexFit</a></Link>
                    </div>
                    <div>
                        <div>
                            <img src="/icons/shopping_cart.png" alt="shopping cart" className="header__shopping-cart" onClick={cartToggle}/>
                            {
                                items.length === 0 ? (
                                    <div>
                                        <span></span>
                                    </div>
                                ) : (
                                    <span className="cart_notification">{totalItems}</span>
                                )
                            }
                            
                        </div>
                    </div>
                </div>
            </header>

            <div className="menu__drawer">
                <a href="#" ><img src="/icons/close.png" alt="close sidebar menu" className="menu__drawer-close" onClick={menuToggle}/></a>
                <div className="menu__drawer-container">
                    <div className="menu__list-container">
                        <h2><Link href="/men"><a className="menu__link">MEN</a></Link></h2>
                        <ul className="menu__list">
                            <li><Link href="/mens/jackets"><a className="menu__link">JACKETS</a></Link></li>
                            <li><Link href="/mens/midlayer"><a className="menu__link">MID-LAYERS</a></Link></li>
                            <li><Link href="/mens/bottoms"><a className="menu__link">BOTTOMS</a></Link></li>
                            <li><Link href="/mens/accessories"><a className="menu__link">ACCESSORIES</a></Link></li>
                        </ul>
                    </div>
                    <div className="menu__list-container">
                        <h2><Link href="/women"><a className="menu__link">WOMEN</a></Link></h2>
                        <ul className="menu__list">
                            <li><Link href="/womens/jackets"><a className="menu__link">JACKETS</a></Link></li>
                            <li><Link href="/womens/midlayer"><a className="menu__link">MID-LAYERS</a></Link></li>
                            <li><Link href="/womens/bottoms"><a className="menu__link">BOTTOMS</a></Link></li>
                            <li><Link href="/womens/accessories"><a className="menu__link">ACCESSORIES</a></Link></li>
                        </ul>
                    </div>
                    <h2><Link href="/aboutus"><a className="menu__link">ABOUT US</a></Link></h2>
                </div>

                <div className="cart__drawer">
                    <div className="cart__header">
                        <a href="#" ><img src="/icons/close.png" alt="close shopping cart" className="cart__drawer-close" onClick={cartToggle}/></a>
                        <p>SHOPPING CART</p>
                    </div>
                    <div className="cart__content">
                        {
                            items.length === 0 ? (
                                <div>
                                    <span>No expenses</span>
                                </div>
                            ) : (
                                items.map((item) => {
                                    total += item.amount * item.cost;

                                    return <CartItem key={uuidv4()} {...item} />
                                })
                            )
                        }
                    </div>
                    <div className="cart-item__footer">
                        <p>Total: ${total}</p>
                        <Link href="/checkout"><a className="btn-checkout">Checkout</a></Link>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Navbar;
