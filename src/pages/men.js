import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const Men = () => (
    <Layout>
        <div className="hero hero--sub">
            <div className="hero__text-box" id="hero__main-text">
                <h1 className="hero-primary">
                    <span className="hero-primary--main">ENGINEERED FOR</span>
                    <span className="hero-primary--sub">THE ELEMENTS</span>
                </h1>
            </div>
        </div>

        <section className="section-men">
            <div className="men__container">
                <div className="men__row">
                    <div className="men__image-area">
                        <img src="/men/jacket/men_mount_parka_dark.jpg" alt="main woman" className="men-image"/>
                    </div>
                    <div className="men__text-area">
                        <h3>Revolutionary Outdoor Gear</h3>
                        <p>Born from necessity, driven by design, the best insulation in any gear.</p>
                        <Link href="/women"><a className="men__link">Show Women's</a></Link>
                    </div>

                </div>

                <div className="men__row">
                    <div className="men__image-area">
                        <img src="/men/jacket/men_oakley_jacket_dark.jpg" alt="main woman" className="men-image"/>
                    </div>
                    <div className="men__text-area">
                        <h3>Engineered to Move</h3>
                        <p>Improvents in insulation equals less layers.  Better warmth, better mobility.</p>
                        <Link href="/men"><a className="men__link">Show Men's</a></Link>
                    </div>
                </div>

                <div className="men__row">
                    <div className="men__image-area">
                        <img src="/men/mid_layer/apollo_vest.jpg" alt="men about woman" className="men-image"/>
                    </div>
                    <div className="men__text-area">
                        <h3>It's in our DNA.</h3>
                        <p>We created what we wanted to wear, now we share it with you.</p>
                        <Link href="/aboutus"><a className="men__link">About Us</a></Link>
                    </div>
                </div>

                <div className="men__row">
                    <div className="men__image-area">
                        <img src="/men/mid_layer/explore_zip_dark.jpg" alt="men about woman" className="men-image"/>
                    </div>
                    <div className="men__text-area">
                        <h3>It's in our DNA.</h3>
                        <p>We created what we wanted to wear, now we share it with you.</p>
                        <Link href="/aboutus"><a className="men__link">About Us</a></Link>
                    </div>
                </div>

                <div className="men__row">
                    <div className="men__image-area">
                        <img src="/men/bottoms/men_enduring_dark.jpg" alt="men about woman" className="men-image"/>
                    </div>
                    <div className="men__text-area">
                        <h3>It's in our DNA.</h3>
                        <p>We created what we wanted to wear, now we share it with you.</p>
                        <Link href="/aboutus"><a className="men__link">About Us</a></Link>
                    </div>
                </div>

                <div className="men__row">
                    <div className="men__image-area">
                        <img src="/tee.jpg" alt="men about woman" className="men-image"/>
                    </div>
                    <div className="men__text-area">
                        <h3>It's in our DNA.</h3>
                        <p>We created what we wanted to wear, now we share it with you.</p>
                        <Link href="/aboutus"><a className="men__link">About Us</a></Link>
                    </div>
                </div>

                <div className="men__row">
                    <div className="men__image-area">
                        <img src="/beanie_gray.jpg" alt="men about woman" className="men-image"/>
                    </div>
                    <div className="men__text-area">
                        <h3>It's in our DNA.</h3>
                        <p>We created what we wanted to wear, now we share it with you.</p>
                        <Link href="/aboutus"><a className="men__link">About Us</a></Link>
                    </div>
                </div>

                <div className="men__row">
                    <div className="men__image-area">
                        <img src="/men/accessories/men_mittens.jpg" alt="men about woman" className="men-image"/>
                    </div>
                    <div className="men__text-area">
                        <h3>It's in our DNA.</h3>
                        <p>We created what we wanted to wear, now we share it with you.</p>
                        <Link href="/aboutus"><a className="men__link">About Us</a></Link>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
);

export default Men;