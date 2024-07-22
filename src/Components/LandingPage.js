import React, { useState, useEffect } from 'react';
import logo_linear from "../photos/logo-linear.jpg";
import livemusic from '../photos/live-music.jpg';
import friendslogo from "../photos/yfaah.jpeg"
import { Link } from 'react-router-dom'
import Carousel from './Carousel';
import photo1 from "../photos/IMG_1519.jpg"
import photo2 from "../photos/IMG_1775.jpeg"
import photo3 from "../photos/IMG_1781.jpeg"
import '../Styles/LandingPage.css';
import Contact from './Contact';
import Footer from './Footer';

const LandingPage = () => {
    const [isLoading, setIsLoading] = useState(true);

    const images = [
        photo1,
        photo2,
        photo3
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Simulate a loading delay

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`landing-page ${isLoading ? 'loading' : ''}`}>
            {isLoading ? (
                <div className="loading-screen">
                    <img id="loading-logo" src={logo_linear} alt="Logo" />
                </div>
            ) : (
                <div className='pushdown'>
                    <main className="main-content">
                        <div className="enclosed-content">
                            <section className="hero">
                                <img className="friends_banner" src={friendslogo} alt="Your Friends Are Already Here" />
                                <div className='friends-box'>
                                    <h2>CHECKOUT OUR WEEKLY SPECIALS</h2>
                                    <Link className='button-89' to="/specials">HERE</Link>
                                </div>
                            </section>
                            <section className="features">
                                    <div className='discover'>
                                        <h2>DISCOVER IKE'S PUB!</h2>
                                    </div>
                                <div className="feature">
                                    <img className="landing-image" src={livemusic} alt="Cheap Drinks" />
                                    <div className="feature-text">
                                        <h2>Welcome to Ike's Pub</h2>
                                        <p> Your go-to spot for relaxed vibes, cold drinks, and good times. Whether you're here for a quick sip or a night out with friends, we've got you covered. Swing by and make yourself at home!</p>
                                    </div>
                                </div>
                            </section>
                            <div className='carousel-container'>
                                <h1>JOIN THE FUN!</h1>
                                <Carousel images={images} autoScrollInterval={3000} />
                            </div>
                            <div>
                                <Contact />
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default LandingPage;
