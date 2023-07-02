// components/Layout.js
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="flex ">
               <div className='w-1/4 bg-red-500 pl-2'> <Sidebar /></div>
                <main className=" w-full bg-yellow-500 ml-2 pl-2" >{children}</main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
