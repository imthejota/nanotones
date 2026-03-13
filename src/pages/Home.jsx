import { Link } from 'react-router-dom';
import Card from '../components/Card/Card';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container page-container">
            <div className="hero-section">
                <div className="hero-content">
                    <div className="brand-pill">UNOFFICIAL KNOWLEDGE BASE</div>
                    <h1 className="hero-title">
                        Master the <span className="gradient-text glow-text">Nano Cortex</span>
                    </h1>
                    <p className="hero-subtitle">
                        Explore every factory capture, IR, and effect. Discover exactly how to dial in famous guitar tones using just your pedal.
                    </p>
                    <div className="hero-cta">
                        <Link to="/explorer" className="btn-primary">
                            <span className="btn-glow"></span>
                            Explore Gear
                        </Link>
                        <Link to="/tones" className="btn-secondary">
                            View Famous Tones
                        </Link>
                    </div>
                </div>
                <div className="hero-visual">
                    <img src="/nanocortex-hero.png" alt="Neural DSP Nano Cortex" className="hero-image" />
                </div>
            </div>

            <div className="features-grid">
                <Link to="/explorer">
                    <Card className="feature-card">
                        <div className="feature-icon icon-blue"></div>
                        <h3>Gear Explorer</h3>
                        <p>Comprehensive breakdown of the 25 factory Captures, 5 IRs, and all built-in effects. Know what you're stepping on.</p>
                    </Card>
                </Link>
                <Link to="/tones">
                    <Card className="feature-card">
                        <div className="feature-icon icon-purple"></div>
                        <h3>Famous Tones</h3>
                        <p>Step-by-step presets to replicate iconic guitar sounds from legendary artists directly on your Nano Cortex.</p>
                    </Card>
                </Link>
                <a href="https://www.patreon.com/cw/BeardGuitar/membership" target="_blank" rel="noopener noreferrer" className="support-link-card">
                    <Card className="feature-card support-card">
                        <div className="feature-icon icon-orange"></div>
                        <h3>Support the Project</h3>
                        <p>Help me keep growing and inventing! Grab a membership on Patreon to support the future of NanoTones.</p>
                    </Card>
                </a>
            </div>
        </div>
    );
};

export default Home;
