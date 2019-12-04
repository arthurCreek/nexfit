import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

const MensAccessories = () => (
    <Layout>
        <div className="hero hero--category">
            <div className="hero__text-box" id="hero__main-text">
                <h1 className="hero-primary">
                    <span className="hero-primary--main">MEN'S</span>
                    <span className="hero-primary--sub">ACCESSORIES</span>
                </h1>
            </div>

        </div>

        <section className="section-home">
            <div className="home__container">
                <div className="home__row">
                    <div className="home__text-area">
                        <h3>Men's Tee</h3>
                        <p>Fully organic cotton tee, comfy, warm and looking your best.</p>
                        <Link href="/women"><a className="home__link home__link--item">SHOP TEE</a></Link>
                    </div>
                    <div className="home__image-area">
                        <img src="/tee.jpg" alt="main woman" className="home-image"/>
                    </div>
                </div>

                <div className="home__row">
                    <div className="home__image-area">
                        <img src="/beanie_gray.jpg" alt="main woman" className="home-image"/>
                    </div>
                    <div className="home__text-area home__text-area--men">
                        <h3>The Beanie</h3>
                        <p>Designed to keep your head toasty and your outing on track.</p>
                        <Link href="/men"><a className="home__link home__link--item">SHOP BEANIE</a></Link>
                    </div>
                </div>

                <div className="home__row">
                    <div className="home__text-area">
                        <h3>The Mitten</h3>
                        <p>A complete seal from the elements for days when cold digits are not an option.</p>
                        <Link href="/women"><a className="home__link home__link--item">SHOP MITTENS</a></Link>
                    </div>
                    <div className="home__image-area">
                        <img src="/men/accessories/men_mittens.jpg" alt="main woman" className="home-image"/>
                    </div>
                </div>

            </div>
        </section>
    </Layout>
);

export default MensAccessories;