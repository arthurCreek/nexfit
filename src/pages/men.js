import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const Men = () => (
    <div>
        <div className="hero hero--sub">
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
                        <img src="/men/jacket/men_mount_parka_dark_min.jpg" alt="main woman" className="gender-image"/>
                    </div>
                    <div className="gender__text-area">
                        <h3>The Mount Parka</h3>
                        <p>Uncomprimised warmth, the latest in our pursiot of warmer insulation.</p>
                        <Link href="/mens/jacket/parka"><a className="gender__link gender__link--gender-item">SHOP MOUNT</a></Link>
                    </div>

                </div>

                <div className="gender__row">
                    <div className="gender__image-area">
                        <img src="/men/jacket/men_oakley_jacket_dark_min.jpg" alt="main woman" className="gender-image"/>
                    </div>
                    <div className="gender__text-area">
                        <h3>The Oakley Jacket</h3>
                        <p>Easily meets your needs in any environment with mobility and warmth.</p>
                        <Link href="/mens/jacket/oakley"><a className="gender__link gender__link--gender-item">SHOP OAKLEY</a></Link>
                    </div>
                </div>

                <div className="gender__row">
                    <div className="gender__image-area">
                        <img src="/men/mid_layer/apollo_vest_min.jpg" alt="men about woman" className="gender-image"/>
                    </div>
                    <div className="gender__text-area">
                        <h3>The Apollo Vest</h3>
                        <p>Protect your core without overheating; our updated take on the performance vest.</p>
                        <Link href="/mens/mid-layer/apollo"><a className="gender__link gender__link--gender-item">SHOP APOLLO</a></Link>
                    </div>
                </div>

                <div className="gender__row">
                    <div className="gender__image-area">
                        <img src="/men/mid_layer/explore_zip_dark_min.jpg" alt="men about woman" className="gender-image"/>
                    </div>
                    <div className="gender__text-area">
                        <h3>The Explore Zip</h3>
                        <p>We redefined the 1/4 zip, this one does it all and it's better than before.</p>
                        <Link href="/mens/mid-layer/explore-zip"><a className="gender__link gender__link--gender-item">SHOP EXPLORE</a></Link>
                    </div>
                </div>

                <div className="gender__row">
                    <div className="gender__image-area">
                        <img src="/men/bottoms/men_enduring_dark_min.jpg" alt="men about woman" className="gender-image"/>
                    </div>
                    <div className="gender__text-area">
                        <h3>The Enduring Pant</h3>
                        <p>Show your legs some love - our best insulation tech into pants to keep you dry.</p>
                        <Link href="/mens/bottoms/enduring-pant"><a className="gender__link gender__link--gender-item">SHOP ENDURING</a></Link>
                    </div>
                </div>

                <div className="gender__row">
                    <div className="gender__image-area">
                        <img src="/tee_min.jpg" alt="men about woman" className="gender-image"/>
                    </div>
                    <div className="gender__text-area">
                        <h3>Men's Tee</h3>
                        <p>Fully organic cotton tee, comfy, warm and looking your best.</p>
                        <Link href="/mens/accessories/tee"><a className="gender__link gender__link--gender-item">SHOP TEE</a></Link>
                    </div>
                </div>

                <div className="gender__row">
                    <div className="gender__image-area">
                        <img src="/beanie_gray_min.jpg" alt="men about woman" className="gender-image"/>
                    </div>
                    <div className="gender__text-area">
                        <h3>The Beanie</h3>
                        <p>Designed to keep your head toasty and your outing on track.</p>
                        <Link href="/mens/accessories/beanie"><a className="gender__link gender__link--gender-item">SHOP BEANIE</a></Link>
                    </div>
                </div>

                <div className="gender__row">
                    <div className="gender__image-area">
                        <img src="/men/accessories/men_mittens_min.jpg" alt="men about woman" className="gender-image"/>
                    </div>
                    <div className="gender__text-area">
                        <h3>The Mitten</h3>
                        <p>A complete seal from the elements for days when cold digits are not an option.</p>
                        <Link href="/mens/accessories/mittens"><a className="gender__link gender__link--gender-item">SHOP MITTENS</a></Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default Men;