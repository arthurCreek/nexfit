import React from 'react';
import Link from 'next/link';


const Footer = () => {

    return (
        <div className="footer__container">
            <div className="footer__adventure">
                <p>Find your</p>
                <p>Next Adventure</p>
            </div>
            <div className="footer__list-container">
                <ul className="menu__list">
                    <li><Link href="/aboutus"><a className="menu__link menu__link--item">ABOUT US</a></Link></li>
                    <li><Link href="/returns"><a className="menu__link menu__link--item">RETURNS</a></Link></li>
                    <li><Link href="/warranty"><a className="menu__link menu__link--item">WARRANTY</a></Link></li>
                </ul>
            </div>
            <div className="footer__list-container">
                <ul>
                    <li><Link href="/faq"><a className="menu__link menu__link--item">FAQS</a></Link></li>
                    <li><Link href="contact"><a className="menu__link menu__link--item">CONTACT</a></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;