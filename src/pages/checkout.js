import React, { useContext } from 'react';
import CartContext from '../context/cart-context';
import FinalCart from '../components/cart/finalCart';
import CartItem from '../components/cart/cartItem';
import Layout from '../components/Layout';
import Link from 'next/link';

const uuidv4 = require('uuid/v4');

const Checkout = () => {
    const { items, dispatch } = useContext(CartContext);

    let total = 0;

    return (
        <Layout>
            <div className="checkout__container">
                <div className="checkout__payment-container">
                    <h1>NexFit</h1>
                    <p>Cart > Information > Shippinh > Payment</p>
                    <h2>Contact information</h2>
                    <form action="#" name="contact_form">
                        <label for="email">Email</label>
                        <input name="email" type="email" required placeholder="you@domain.com"/>
                        <br />
                        <div className="form__side-by-side">
                            <div>
                                <label for="first_name">First Name</label>
                                <input name="first_name" type="text" required placeholder="John"/>
                            </div>
                            <div>
                                <label for="last_name">Last Name</label>
                                <input name="last_name" type="text" required placeholder="Doe"/>
                            </div>
                        </div>

                        <input type="checkbox" name="marketing"/>
                        <label for="marketing">Keep me up to date on news and exclusive offers</label>

                        <br />

                        <h2>Shipping</h2>
                        <div className="form__side-by-side">
                            <div>
                                <label for="first_name_shipping"></label>
                                <input name="first_name_shipping" type="text" required placeholder="First Name"/>
                            </div>
                            <div>
                                <label for="last_name_shipping"></label>
                                <input name="last_name_shipping" type="text" required placeholder="Last Name"/>
                            </div>
                        </div>

                        <div>
                            <label for="company"></label>
                            <input name="company" type="text" placeholder="Company (optional)"/>
                        </div>

                        <div>
                            <label for="address"></label>
                            <input name="address" type="text" required placeholder="Address"/>
                        </div>

                        <div>
                            <label for="apartment"></label>
                            <input name="apartment" type="text" placeholder="Apartment, suite, etc. (optional)"/>
                        </div>

                        <div className="form__side-by-side">
                            <div>
                                <label for="city"></label>
                                <input name="city" type="text" required placeholder="City"/>
                            </div>

                            <div>
                                <label for="state"></label>
                                <input name="state" type="text" required placeholder="State (CA)"/>
                            </div>
                        </div>

                        <div>
                            <label for="zip"></label>
                            <input name="zip" type="text" required placeholder="ZIP Code"/>
                        </div>

                        <div>
                            <label for="phone"></label>
                            <input name="phone" type="text" required placeholder="Phone"/>
                        </div>

                        <div class="center">
                            <Link href="#"><a>Return to cart</a></Link>
                            <Link href="#"><a>Continue Checkout</a></Link>
                        </div>
                    </form>	
                </div>

                <div className="checkout__main-item-container">
                    <div className="checkout__cart-content">
                        {
                            items.length === 0 ? (
                                <div>
                                    <span>No expenses</span>
                                </div>
                            ) : (
                                items.map((item) => {
                                    total += item.amount * item.cost;

                                    return <FinalCart key={uuidv4()} {...item} />
                                })
                            )
                        }
                    </div>
                    <div className="checkout__item-footer">
                        <p>Total: ${total}</p>
                        <Link href="/checkout"><a className="btn-checkout">Checkout</a></Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Checkout;