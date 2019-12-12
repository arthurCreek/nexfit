import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

const WomensJackets = () => (
    <div>
        <div className="hero hero--category">
            <div className="hero__text-box" id="hero__main-text">
                <h1 className="hero-primary">
                    <span className="hero-primary--main">WOMEN'S</span>
                    <span className="hero-primary--sub">MID-LAYER</span>
                </h1>
            </div>

        </div>

        <section className="section-home">
            <div className="home__container">
                <div className="home__row">
                    <div className="home__text-area">
                        <h3>The Explore Zip</h3>
                        <p>Thinner, lighter, and our favorite layering for on the move.</p>
                        <Link href="/womens/mid-layer/explore-zip"><a className="home__link home__link--item">SHOP EXPLORE</a></Link>
                    </div>
                    <div className="home__image-area">
                        <img src="/women/mid_layer/women_explore_zip_dark.jpg" alt="main woman" className="home-image"/>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default WomensJackets;