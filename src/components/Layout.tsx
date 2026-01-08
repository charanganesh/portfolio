import React, { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
    children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const mainStyle: React.CSSProperties = {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    };

    return (
        <div style={mainStyle}>
            <Navbar />
            <main>{children}</main>
        </div>
    );
};
