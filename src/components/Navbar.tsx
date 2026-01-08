import React from 'react';

const Navbar: React.FC = () => {
    const navStyle: React.CSSProperties = {
        position: 'sticky',
        top: 0,
        width: '100%',
        height: '48px',
        backgroundColor: 'var(--color-glass)',
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const containerStyle: React.CSSProperties = {
        maxWidth: 'var(--max-width)',
        width: '100%',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '12px',
        fontWeight: 500,
    };

    const logoStyle: React.CSSProperties = {
        fontWeight: 600,
        fontSize: '18px',
    };

    const linkListStyle: React.CSSProperties = {
        display: 'flex',
        gap: '24px',
        opacity: 0.8,
    };

    return (
        <nav style={navStyle}>
            <div style={containerStyle}>
                <div style={logoStyle}>Charan Ganesh</div>
                <ul style={linkListStyle}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
