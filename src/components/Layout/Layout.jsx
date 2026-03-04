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
                </nav>
            </header>
            <main className="main-content">
                <Outlet />
            </main>
            <footer className="footer">
                <p>NanoTones - Unofficial Neural DSP Nano Cortex Knowledge Base</p>
            </footer>
        </div>
    );
};

export default Layout;
