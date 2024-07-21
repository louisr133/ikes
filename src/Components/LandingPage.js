import React, { useState, useEffect } from 'react';
import logo_linear from "../photos/logo-linear.jpg";
import comfy_img from '../photos/comfy-img.jpg';
import livemusic from '../photos/live-music.jpg';
import friendslogo from "../photos/yfaah.jpeg"
import { Link } from 'react-router-dom'
import '../Styles/LandingPage.css';

const LandingPage = () => {
    const [isLoading, setIsLoading] = useState(true);

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
                                <img className="friends_banner" src={friendslogo} />
                                <div className='friends-box'>
                                    <h2>CHECKOUT OUR WEEKLY SPECIALS!</h2>
                                    <button><Link to="/menu">MENU</Link></button>
                                </div>
                            </section>
                            <section className="features">
                                    <div className='discover'>
                                        <h2>DISCOVER IKE'S PUB!</h2>
                                    </div>
                                <div className="feature">
                                    <img className="landing-image" src={livemusic} alt="Cheap Drinks" />
                                    <div className="feature-text">
                                        <h2>Discover Ike's Pub</h2>
                                        <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. DUIS VEL NULLA SED PURUS MAXIMUS BIBENDUM. CLASS APTENT TACITI SOCIOSQU AD LITORA TORQUENT PER CONUBIA NOSTRA, PER INCEPTOS HIMENAEOS. CURABITUR GRAVIDA, ENIM QUIS PORTA MATTIS, AUGUE ARCU TINCIDUNT AUGUE, VEL TEMPOR ENIM PURUS ID ELIT. ALIQUAM EU FACILISIS ORCI, VITAE SAGITTIS LIBERO.</p>
                                    </div>
                                </div>
                            </section>
                            <div className='courasel'>

                            </div>
                        </div>
                    </main>
                    <footer className="footer">
                        <p>&copy; 2024 RomanMathDev. All rights reserved.</p>
                    </footer>
                </div>
            )}
        </div>
    );
};

export default LandingPage;
