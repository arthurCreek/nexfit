import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

const WomensJackets = () => (
    <div>
        <div className="hero hero--category">
            <div className="hero__text-box" id="hero__main-text">
                <h1 className="hero-primary">
                    <span className="hero-primary--main">WOMEN'S</span>
                    <span className="hero-primary--sub">JACKETS</span>
                </h1>
            </div>

        </div>

        <section className="section-home">
            <div className="home__container">
                <div className="home__row">
                    <div className="home__text-area">
                        <h3>The Mount Parka</h3>
                        <p>Uncomprimised warmth, the latest in our pursiot of warmer insulation.</p>
                        <Link href="/womens/jacket/mount-parka"><a className="home__link home__link--item">SHOP MOUNT</a></Link>
                    </div>
                    <div className="home__image-area">
                        <img src="/women/jacket/parka_main_min.jpg" alt="main woman" className="home-image"/>
                    </div>
                </div>

                <div className="home__row">
                    <div className="home__image-area">
                        <img src="/women/jacket/oakley_main_min.jpg" alt="main woman" className="home-image"/>
                    </div>
                    <div className="home__text-area home__text-area--men">
                        <h3>The Oakley Jacket</h3>
                        <p>Elevated technology for 2019, nothing but the best.</p>
                        <Link href="/womens/jacket/oakley-jacket"><a className="home__link home__link--item">SHOP OAKLEY</a></Link>
                    </div>
                </div>

                <div className="home__row">
                    <div className="home__text-area">
                        <h3>The Enduring Jacket</h3>
                        <p>Easily meets your needs in any environment with mobility and warmth.</p>
                        <Link href="/womens/jacket/enduring-jacket"><a className="home__link home__link--item">SHOP ENDURING</a></Link>
                    </div>
                    <div className="home__image-area">
                        <img src="/women/jacket/enduring_main_min.jpg" alt="main woman" className="home-image"/>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default WomensJackets;