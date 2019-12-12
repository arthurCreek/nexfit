import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

const WomensBottoms = () => (
    <Layout>
        <div className="hero hero--category">
            <div className="hero__text-box" id="hero__main-text">
                <h1 className="hero-primary">
                    <span className="hero-primary--main">WOMEN'S</span>
                    <span className="hero-primary--sub">BOTTOMS</span>
                </h1>
            </div>

        </div>

        <section className="section-home">
            <div className="home__container">
                <div className="home__row">
                    <div className="home__text-area">
                        <h3>The Enduring Pant</h3>
                        <p>Back and better than ever, full protection and warmth for days.</p>
                        <Link href="/womens/bottoms/enduring-pant"><a className="home__link home__link--item">SHOP ENDURING</a></Link>
                    </div>
                    <div className="home__image-area">
                        <img src="/women/bottoms/enduring_main.jpg" alt="main woman" className="home-image"/>
                    </div>
                </div>

                <div className="home__row">
                    <div className="home__image-area">
                        <img src="/women/bottoms/leggings_main.jpg" alt="main woman" className="home-image"/>
                    </div>
                    <div className="home__text-area home__text-area--men">
                        <h3>The Leggings</h3>
                        <p>For when you need the extra warmth to get active on the chillest of days.</p>
                        <Link href="/womens/bottoms/leggings"><a className="home__link home__link--item">SHOP LEGGINGS</a></Link>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
);

export default WomensBottoms;