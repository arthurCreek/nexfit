import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

const MensBottoms = () => (
    <div>
        <div className="hero hero--category">
            <div className="hero__text-box" id="hero__main-text">
                <h1 className="hero-primary">
                    <span className="hero-primary--main">MEN'S</span>
                    <span className="hero-primary--sub">BOTTOMS</span>
                </h1>
            </div>

        </div>

        <section className="section-home">
            <div className="home__container">
                <div className="home__row">
                    <div className="home__text-area">
                        <h3>The Enduring Pant</h3>
                        <p>Show your legs some love - our best insulation tech into pants to keep you dry.</p>
                        <Link href="/mens/bottoms/enduring-pant"><a className="home__link home__link--item">SHOP ENDURING</a></Link>
                    </div>
                    <div className="home__image-area">
                        <img src="/men/bottoms/men_enduring_dark_min.jpg" alt="main woman" className="home-image"/>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default MensBottoms;