import React, { useState, useEffect, useRef } from 'react';
import iphoneImg from '../assets/iphone.png';
import ipadImg from '../assets/ipad.png';
import macbookImg from '../assets/macbook.png';
import webImg from '../assets/web.png';

interface Platform {
    name: string;
    word: string;
    image: string;
}

const platforms: Platform[] = [
    { name: 'iOS', word: 'iOS', image: iphoneImg },
    { name: 'iPadOS', word: 'iPadOS', image: ipadImg },
    { name: 'macOS', word: 'macOS', image: macbookImg },
    { name: 'Web', word: 'the web', image: webImg },
];

export const Hero: React.FC = () => {
    const [currentPlatform, setCurrentPlatform] = useState(0);
    const [prevPlatform, setPrevPlatform] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const section = sectionRef.current;
            const rect = section.getBoundingClientRect();
            const sectionHeight = section.offsetHeight;
            const viewportHeight = window.innerHeight;

            const scrollProgress = Math.max(0, Math.min(1, -rect.top / (sectionHeight - viewportHeight)));
            const platformIndex = Math.min(3, Math.floor(scrollProgress * 4));

            if (platformIndex !== currentPlatform) {
                setPrevPlatform(currentPlatform);
                setCurrentPlatform(platformIndex);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentPlatform]);

    const containerStyle: React.CSSProperties = {
        minHeight: '400vh',
        position: 'relative',
    };

    const stickyContainerStyle: React.CSSProperties = {
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    };

    const contentStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
        gap: window.innerWidth > 768 ? '80px' : '40px',
        alignItems: 'center',
        maxWidth: 'var(--max-width)',
        width: '100%',
        padding: window.innerWidth > 768 ? '0 40px' : '0 20px',
    };

    const textContainerStyle: React.CSSProperties = {
        fontSize: window.innerWidth > 768 ? '48px' : '32px',
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: '-0.015em',
        textAlign: window.innerWidth > 768 ? 'left' : 'center',
    };

    const staticTextStyle: React.CSSProperties = {
        marginBottom: '8px',
    };

    const dynamicLineStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: window.innerWidth > 768 ? 'flex-start' : 'center',
        gap: window.innerWidth > 768 ? '12px' : '8px',
        minHeight: window.innerWidth > 768 ? '58px' : '40px',
        flexWrap: 'wrap',
    };

    const wordContainerStyle: React.CSSProperties = {
        position: 'relative',
        display: 'inline-block',
        width: window.innerWidth > 768 ? '150px' : '120px',
        height: window.innerWidth > 768 ? '58px' : '40px',
        verticalAlign: 'baseline',
    };

    const animatedWordStyle = (isActive: boolean, isPrev: boolean): React.CSSProperties => ({
        position: 'absolute',
        left: 0,
        bottom: 0,
        whiteSpace: 'nowrap',
        color: 'var(--color-accent)',
        fontWeight: 700,
        transform: isActive ? 'translateY(0)' : isPrev ? 'translateY(-100%)' : 'translateY(100%)',
        opacity: isActive ? 1 : 0,
        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease',
    });

    const imageContainerStyle: React.CSSProperties = {
        position: 'relative',
        height: window.innerWidth > 768 ? '500px' : '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    };

    const imageStyle: React.CSSProperties = {
        position: 'absolute',
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
    };

    return (
        <div ref={sectionRef} style={containerStyle}>
            <div style={stickyContainerStyle}>
                <div style={contentStyle}>
                    <div style={textContainerStyle}>
                        <div style={staticTextStyle}>
                            Hello! I'm Charan.
                        </div>
                        <div style={dynamicLineStyle}>
                            <span>I build stuff for</span>
                            <div style={wordContainerStyle}>
                                {platforms.map((platform, index) => (
                                    <span
                                        key={platform.name}
                                        style={animatedWordStyle(
                                            currentPlatform === index,
                                            prevPlatform === index
                                        )}
                                    >
                                        {platform.word}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div style={imageContainerStyle}>
                        {platforms.map((platform, index) => (
                            <img
                                key={platform.name}
                                src={platform.image}
                                alt={platform.name}
                                style={{
                                    ...imageStyle,
                                    opacity: currentPlatform === index ? 1 : 0,
                                    transform: currentPlatform === index ? 'scale(1)' : 'scale(0.95)',
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
