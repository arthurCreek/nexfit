import React from 'react';
import Link from 'next/link';

const Navbar = () => {

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
                        <img src="/icons/shopping_cart.png" alt="shopping cart" className="header__shopping-cart" onClick={cartToggle}/>
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
                    <h2>ABOUT US</h2>
                </div>

                <div className="cart__drawer">
                    <div>
                        <a href="#" ><img src="/icons/close.png" alt="close shopping cart" className="cart__drawer-close" onClick={cartToggle}/></a>
                    </div>
                    <div className="cart__content">
                        
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Navbar;
