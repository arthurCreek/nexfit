import Layout from '../components/Layout';

const AboutUs = () => (
    <Layout>
        <div className="hero hero--sub">
            <div className="hero__text-box" id="hero__main-text">
                <h1 className="hero-primary">
                    <span className="hero-primary--main">BUILT</span>
                    <span className="hero-primary--sub">FROM EXPERIENCE</span>
                </h1>
            </div>
        </div>

        <section className="section-home">
            <div className="home__container">
                <div className="home__row">
                    <div className="home__text-area">
                        <h3>Inspired by the Alps</h3>
                        <p>Our founder Arthur Creek went on a climbing trip in the Alps, Arthur had trouble staying warm despite being puffed up with layers of insulation. There had to be a better way to enjoy the adventure.</p>
                    </div>
                    <div className="home__image-area">
                        <img src="/about/alps.jpg" alt="main woman" className="home-image"/>
                    </div>
                </div>

                <div className="home__row">
                    <div className="home__image-area">
                        <img src="/about/research_jacket.jpg" alt="about research" className="home-image"/>
                    </div>
                    <div className="home__text-area home__text-area--men">
                        <h3>From the ALPS to YOU</h3>
                        <p>NexFit was started with an idea. Why not leverage new insulation technology to protect against extreme environments wherever we go. Through years of iteration and innovation we bring to the world the greatest insulated, manuverable outerwear.</p>
                    </div>
                </div>

            </div>
        </section>
    </Layout>
);

export default AboutUs;