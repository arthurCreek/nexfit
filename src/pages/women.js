import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const Women = () => (
    <Layout>
        <div className="hero hero--sub hero--sub-women">
            <div className="hero__text-box" id="hero__main-text">
                <h1 className="hero-primary">
                    <span className="hero-primary--main">ENGINEERED FOR</span>
                    <span className="hero-primary--sub">THE ELEMENTS</span>
                </h1>
            </div>
        </div>

        <section className="section-gender">
            <div className="gender__container">
                <div className="gender__row">
                    <div className="gender__image-area">
                        <img src="/women/jacket/women_mount_parka_dark.jpg" alt="main woman" className="gender-image"/>
                    </div>
                    <div className="gender__text-area">
                        <h3>The Mount Parka</h3>
                        <p>Uncomprimised warmth, the latest in our pursiot of warmer insulation.</p>
                        <Link href="/womens/jacket/mount-parka"><a className="gender__link gender__link--gender-item">SHOP MOUNT</a></Link>
                    </div>

                </div>

                <div className="gender__row">
                    <div className="gender__image-area">
                        <img src="/women/jacket/women_oakley_jacket_dark.jpg" alt="main woman" className="gender-image"/>
                    </div>
                    <div className="gender__text-area">
                        <h3>The Oakley Jacket</h3> 
                        <p>Elevated technology for 2019, nothing but the best.</p>
                        <Link href="/womens/jacket/oakley-jacket"><a className="gender__link gender__link--gender-item">SHOP OAKLEY</a></Link>
                    </div>
                </div>

                <div className="gender__row">
                    <div className="gender__image-area">
                        <img src="/women/jacket/women_enduring_jacket_dark.jpg" alt="main woman" className="gender-image"/>
                    </div>
                    <div className="gender__text-area">
                        <h3>The Enduring Jacket</h3> 
                        <p>Easily meets your needs in any environment with mobility and warmth.</p>
                        <Link href="/womens/jacket/enduring-jacket"><a className="gender__link gender__link--gender-item">SHOP ENDURING</a></Link>
                    </div>
                </div>

                <div className="gender__row">
                    <div className="gender__image-area">
                        <img src="/women/mid_layer/women_explore_zip_dark.jpg" alt="men about woman" className="gender-image"/>
                    </div>
                    <div className="gender__text-area">
                        <h3>The Explore Zip</h3>
                        <p>Thinner, lighter, and our favorite layering for on the move.</p>
                        <Link href="/womens/mid-layer/explore-zip"><a className="gender__link gender__link--gender-item">SHOP EXPLORE</a></Link>
                    </div>
                </div>

                <div className="gender__row">
                    <div className="gender__image-area">
                        <img src="/women/bottoms/women_enduring_dark.jpg" alt="men about woman" className="gender-image"/>
                    </div>
                    <div className="gender__text-area">
                        <h3>The Enduring Pant</h3>
                        <p>Back and better than ever, full protection and warmth for days.</p>
                        <Link href="/womens/bottoms/enduring-pant"><a className="gender__link gender__link--gender-item">SHOP ENDURING</a></Link>
                    </div>
                </div>

                <div className="gender__row">
                    <div className="gender__image-area">
                        <img src="/women/bottoms/women_leggings.jpg" alt="men about woman" className="gender-image"/>
                    </div>
                    <div className="gender__text-area">
                        <h3>The Leggings</h3>
                        <p>For when you need the extra warmth to get active on the chillest of days.</p>
                        <Link href="/womens/bottoms/leggings"><a className="gender__link gender__link--gender-item">SHOP LEGGINGS</a></Link>
                    </div>
                </div>

                <div className="gender__row">
                    <div className="gender__image-area">
                        <img src="/tee.jpg" alt="men about woman" className="gender-image"/>
                    </div>
                    <div className="gender__text-area">
                        <h3>The Tee</h3>
                        <p>Fully organic cotton tee, comfy, warm and looking your best.</p>
                        <Link href="/womens/accessories/tee"><a className="gender__link gender__link--gender-item">SHOP TEE</a></Link>
                    </div>
                </div>

                <div className="gender__row">
                    <div className="gender__image-area">
                        <img src="/beanie_gray.jpg" alt="men about woman" className="gender-image"/>
                    </div>
                    <div className="gender__text-area">
                        <h3>The Beanie</h3>
                        <p>Designed to keep your head toasty and your outing on track.</p>
                        <Link href="/womens/accessories/beanie"><a className="gender__link gender__link--gender-item">SHOP BEANIE</a></Link>
                    </div>
                </div>

                <div className="gender__row">
                    <div className="gender__image-area">
                        <img src="/women/accessories/women_mittens.jpg" alt="men about woman" className="gender-image"/>
                    </div>
                    <div className="gender__text-area">
                        <h3>The Mitten</h3>
                        <p>A complete seal from the elements for days when cold digits are not an option.</p>
                        <Link href="/womens/accessories/mittens"><a className="gender__link gender__link--gender-item">SHOP MITTENS</a></Link>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
);

export default Women;