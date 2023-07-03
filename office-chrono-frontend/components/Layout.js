// components/Layout.js
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

import React, { useState } from 'react'


const Layout = ({ children }) => {

    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };


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
