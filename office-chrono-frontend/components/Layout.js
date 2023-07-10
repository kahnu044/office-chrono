// components/Layout.js
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

import React, { useState, useEffect } from 'react'

const Layout = ({ children }) => {

    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 680) {
                setIsSidebarOpen(false);
            }
            setIsSidebarOpen(true);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initial check on component mount
        handleResize();

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    return (
        <div>
            <Header
                toggleProfile={toggleProfile}
                toggleNavbar={toggleNavbar}
                isProfileOpen={isProfileOpen}
                isSidebarOpen={isSidebarOpen}
            />

            <Sidebar
                isSidebarOpen={isSidebarOpen}
            />

            <div className="mt-16 p-4 sm:ml-64">
                The page is : <br />
                {children}
            </div>

            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
