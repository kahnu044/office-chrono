// components/Layout.js
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="content">
                <Sidebar />
                <main>{children}</main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
