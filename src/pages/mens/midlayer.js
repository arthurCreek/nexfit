import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

const MensMidLayer = () => (
    <Layout>
        <div className="hero hero--category">
            <div className="hero__text-box" id="hero__main-text">
                <h1 className="hero-primary">
                    <span className="hero-primary--main">MEN'S</span>
                    <span className="hero-primary--sub">MID-LAYERS</span>
                </h1>
            </div>

        </div>

        <section className="section-home">
            <div className="home__container">
                <div className="home__row">
                    <div className="home__text-area">
                        <h3>The Apollo Vest</h3>
                        <p>Protect your core without overheating; our updated take on the performance vest.</p>
                        <Link href="/women"><a className="home__link home__link--item">SHOP APOLLO</a></Link>
                    </div>
                    <div className="home__image-area">
                        <img src="/men/mid_layer/apollo_vest.jpg" alt="main woman" className="home-image"/>
                    </div>
                </div>

                <div className="home__row">
                    <div className="home__image-area">
                        <img src="/men/mid_layer/explore_zip_dark.jpg" alt="main woman" className="home-image"/>
                    </div>
                    <div className="home__text-area home__text-area--men">
                        <h3>The Explore Zip</h3>
                        <p>We redefined the 1/4 zip, this one does it all and it's better than before.</p>
                        <Link href="/men"><a className="home__link home__link--item">SHOP EXPLORE</a></Link>
                    </div>
                </div>

            </div>
        </section>
    </Layout>
);

export default MensMidLayer;