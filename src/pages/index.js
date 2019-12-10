import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const index = () => (
    <div>
        <div className="hero">
            <div className="hero__text-box" id="hero__main-text">
                <h1 className="hero-primary">
                    <span className="hero-primary--main">OUTERWEAR</span>
                    <span className="hero-primary--sub">Fit for your next adventure</span>
                </h1>
            </div>

            <div className="hero__link-div">
                <Link href="/men"><a className="hero__link">Shop Men's</a></Link>
                <Link href="/women"><a className="hero__link">Show Women's</a></Link>
            </div>
        </div>

        <section className="section-home">
            <div className="home__container">
                <div className="home__row">
                    <div className="home__text-area">
                        <h3>Revolutionary Outdoor Gear</h3>
                        <p>Born from necessity, driven by design, the best insulation in any gear.</p>
                        <Link href="/women"><a className="home__link home__link--item">Show Women's</a></Link>
                    </div>
                    <div className="home__image-area">
                        <img src="/woman_main.jpg" alt="main woman" className="home-image"/>
                    </div>
                </div>

                <div className="home__row">
                    <div className="home__image-area">
                        <img src="/man_main.jpg" alt="main woman" className="home-image"/>
                    </div>
                    <div className="home__text-area home__text-area--men">
                        <h3>Engineered to Move</h3>
                        <p>Improvents in insulation equals less layers.  Better warmth, better mobility.</p>
                        <Link href="/men"><a className="home__link home__link--item">Show Men's</a></Link>
                    </div>
                </div>

                <div className="home__row">
                    <div className="home__text-area">
                        <h3>It's in our DNA.</h3>
                        <p>We created what we wanted to wear, now we share it with you.</p>
                        <Link href="/aboutus"><a className="home__link home__link--item">About Us</a></Link>
                    </div>
                    <div className="home__image-area">
                        <img src="/woman_about.jpg" alt="home about woman" className="home-image"/>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default index;