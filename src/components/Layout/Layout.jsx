import { Outlet, Link } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
    return (
        <div className="layout-container">
            <header className="navbar">
                <div className="nav-brand">
                    <Link to="/">NanoTones</Link>
                </div>
                <nav className="nav-links">
                    <Link to="/explorer">Gear Explorer</Link>
                    <Link to="/tones">Famous Tones</Link>
                    <a href="https://www.patreon.com/cw/BeardGuitar" target="_blank" rel="noopener noreferrer" className="support-badge">Support</a>
                </nav>
            </header>
            <main className="main-content">
                <Outlet />
            </main>
            <footer className="footer">
                <div className="footer-content">
                    <p>NanoTones - Unofficial Neural DSP Nano Cortex Knowledge Base</p>
                    <p className="patreon-mention">
                        Help me keep growing and inventing! <a href="https://www.patreon.com/cw/BeardGuitar" target="_blank" rel="noopener noreferrer" className="patreon-link">Support on Patreon</a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
