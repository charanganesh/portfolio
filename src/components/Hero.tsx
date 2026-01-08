import React, { useState, useEffect, useRef } from 'react';
import iphoneImg from '../assets/iphone.png';
import ipadImg from '../assets/ipad.png';
import macbookImg from '../assets/macbook.png';
import webImg from '../assets/web.png';

interface Platform {
    name: string;
    text: string;
    image: string;
}

const platforms: Platform[] = [
    { name: 'iOS', text: "Hello! I'm Charan.\nI build stuff for iOS.", image: iphoneImg },
    { name: 'iPadOS', text: "Hello! I'm Charan.\nI build stuff for iPadOS.", image: ipadImg },
    { name: 'macOS', text: "Hello! I'm Charan.\nI build stuff for macOS.", image: macbookImg },
    { name: 'Web', text: "Hello! I'm Charan.\nI build stuff for the web.", image: webImg },
];

export const Hero: React.FC = () => {
    const [currentPlatform, setCurrentPlatform] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const section = sectionRef.current;
            const rect = section.getBoundingClientRect();
            const sectionHeight = section.offsetHeight;
            const viewportHeight = window.innerHeight;

            // Calculate scroll progress through the hero section
            // When section is at top of viewport, progress = 0
            // When section is scrolled past viewport, progress = 1
            const scrollProgress = Math.max(0, Math.min(1, -rect.top / (sectionHeight - viewportHeight)));

            // Divide the scroll into 4 equal parts for 4 platforms
            const platformIndex = Math.min(3, Math.floor(scrollProgress * 4));
            setCurrentPlatform(platformIndex);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const containerStyle: React.CSSProperties = {
        minHeight: '400vh', // 4x viewport height for 4 platforms
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
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
        maxWidth: 'var(--max-width)',
        width: '100%',
        padding: '0 40px',
    };

    const textContainerStyle: React.CSSProperties = {
        fontSize: '48px',
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: '-0.015em',
        whiteSpace: 'pre-line',
    };

    const imageContainerStyle: React.CSSProperties = {
        position: 'relative',
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
                        {platforms[currentPlatform].text}
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
