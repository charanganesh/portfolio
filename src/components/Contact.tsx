import React from 'react';

export const Contact: React.FC = () => {
    const sectionStyle: React.CSSProperties = {
        padding: window.innerWidth > 768 ? 'var(--section-padding)' : '60px 20px',
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
    };

    const headingStyle: React.CSSProperties = {
        fontSize: window.innerWidth > 768 ? '56px' : '36px',
        fontWeight: 700,
        marginBottom: window.innerWidth > 768 ? '48px' : '32px',
        textAlign: 'center',
        letterSpacing: '-0.015em',
    };

    const contentStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: window.innerWidth > 768 ? '32px' : '20px',
        maxWidth: '800px',
        margin: '0 auto',
    };

    const cardStyle: React.CSSProperties = {
        padding: window.innerWidth > 768 ? '32px' : '24px',
        backgroundColor: 'rgba(0, 0, 0, 0.02)',
        borderRadius: '18px',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        transition: 'all 0.3s ease',
    };

    const labelStyle: React.CSSProperties = {
        fontSize: '12px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        color: 'var(--color-text-secondary)',
        marginBottom: '8px',
    };

    const valueStyle: React.CSSProperties = {
        fontSize: '17px',
        fontWeight: 500,
        color: 'var(--color-text)',
    };

    const linkStyle: React.CSSProperties = {
        ...valueStyle,
        color: 'var(--color-accent)',
        textDecoration: 'none',
        transition: 'opacity 0.2s ease',
    };

    const socialLinksStyle: React.CSSProperties = {
        display: 'flex',
        gap: '16px',
        marginTop: '48px',
        justifyContent: 'center',
    };

    const socialButtonStyle: React.CSSProperties = {
        padding: '12px 24px',
        backgroundColor: 'var(--color-text)',
        color: 'var(--color-bg)',
        borderRadius: '980px',
        fontSize: '14px',
        fontWeight: 600,
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        display: 'inline-block',
    };

    return (
        <section id="contact" style={sectionStyle}>
            <h2 style={headingStyle}>Get in Touch</h2>

            <div style={contentStyle}>
                <div style={cardStyle}>
                    <div style={labelStyle}>Name</div>
                    <div style={valueStyle}>Charan Ganesh</div>
                </div>

                <div style={cardStyle}>
                    <div style={labelStyle}>Location</div>
                    <div style={valueStyle}>Bengaluru, IN</div>
                </div>

                <div style={cardStyle}>
                    <div style={labelStyle}>Phone</div>
                    <a href="tel:+919962423021" style={linkStyle}>+91 9962423021</a>
                </div>

                <div style={cardStyle}>
                    <div style={labelStyle}>Email</div>
                    <a href="mailto:charan.ganesh1999@gmail.com" style={linkStyle}>
                        charan.ganesh1999@gmail.com
                    </a>
                </div>
            </div>

            <div style={socialLinksStyle}>
                <a
                    href="https://www.linkedin.com/in/charanganesh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={socialButtonStyle}
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/charanganesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={socialButtonStyle}
                >
                    GitHub
                </a>
            </div>
        </section>
    );
};
