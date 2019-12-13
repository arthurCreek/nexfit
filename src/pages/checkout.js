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
        <div>
            <div className="checkout__container">
                <div className="checkout__payment-container">
                    <div className="checkout__payment-container-center">
                        <h1>NexFit</h1>
                        <p>Cart > <span className="checkout_text-bold">Information</span> > Shipping > Payment</p>
                        <h2>Contact information</h2>
                        <form action="#" name="contact_form">
                            <div className="contact__email-container">
                                <label for="email"></label>
                                <input name="email" type="email" required placeholder="Email" className="payment__input--large"/>

                                <div className="contact__marketing-container">
                                    <input type="checkbox" name="marketing"/>
                                    <label for="marketing">Keep me up to date on news and exclusive offers</label>
                                </div>
                            </div>

                            <h2 className="checkout__h2">Shipping</h2>
                            <div className="form__side-by-side">
                                <div className="form__side-by-side--inputs">
                                    <label for="first_name_shipping"></label>
                                    <input name="first_name_shipping" type="text" required placeholder="First Name" className="payment__input--small"/>
                                </div>
                                <div>
                                    <label for="last_name_shipping"></label>
                                    <input name="last_name_shipping" type="text" required placeholder="Last Name" className="payment__input--small"/>
                                </div>
                            </div>

                            <div>
                                <label for="company"></label>
                                <input name="company" type="text" placeholder="Company (optional)" className="payment__input--large"/>
                            </div>

                            <div>
                                <label for="address"></label>
                                <input name="address" type="text" required placeholder="Address" className="payment__input--large"/>
                            </div>

                            <div>
                                <label for="apartment"></label>
                                <input name="apartment" type="text" placeholder="Apartment, suite, etc. (optional)" className="payment__input--large"/>
                            </div>

                            <div>
                                <div>
                                    <label for="city"></label>
                                    <input name="city" type="text" required placeholder="City" className="payment__input--large"/>
                                </div>


                            </div>

                            <div className="form__side-by-side">
                                <div className="form__side-by-side--inputs">
                                    <label for="state"></label>
                                    <input name="state" type="text" required placeholder="State (CA)" className="payment__input--small"/>
                                </div>

                                <div>
                                    <label for="zip"></label>
                                    <input name="zip" type="text" required placeholder="ZIP Code" className="payment__input--small"/>
                                </div>
                            </div>

                            <div>
                                <label for="phone"></label>
                                <input name="phone" type="text" required placeholder="Phone" className="payment__input--large"/>
                            </div>

                            <div className="checkout__footer-checkout">
                                <Link href="#"><a className="checkout-return">Return to cart</a></Link>
                                <Link href="#"><a className="btn-checkout">Continue Checkout</a></Link>
                            </div>
                        </form>	
                    </div>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;