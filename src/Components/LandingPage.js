import React, { useState, useEffect } from 'react';
import logo_linear from "../photos/logo-linear.jpg";
import comfy_img from '../photos/comfy-img.jpg';
import livemusic from '../photos/live-music.jpg';
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
                <>
                    <main className="main-content">
                        <div className="enclosed-content">
                            <section className="hero">
                                <h1>Your Friends Are Already Here!</h1>
                            </section>
                            <section className="features">
                                <div className="feature">
                                    <div className="feature-text">
                                        <h2>Cheap Drinks</h2>
                                        <p>$2 Domestic Beers</p>
                                    </div>
                                    <img className="landing-image" src='https://i5.walmartimages.com/asr/8e207c86-7884-4bb9-9181-70ca0928e7ad.a67bd9ad17b4329905b247e14f739690.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF' alt="Cheap Drinks" />
                                </div>
                                <div className="feature row-reverse">
                                    <div className="feature-text">
                                        <h2>Live Events</h2>
                                        <p>Music and entertainment weekly</p>
                                    </div>
                                    <img className="landing-image" src={livemusic} alt="Live Events" />
                                </div>
                                <div className="feature">
                                    <div className="feature-text">
                                        <h2>Cozy Atmosphere</h2>
                                        <p>Perfect for any occasion</p>
                                    </div>
                                    <img className="landing-image" src={comfy_img} alt="Cozy Atmosphere" />
                                </div>
                            </section>
                        </div>
                    </main>
                    <footer className="footer">
                        <p>&copy; 2024 RomanMathDev. All rights reserved.</p>
                    </footer>
                </>
            )}
        </div>
    );
};

export default LandingPage;
