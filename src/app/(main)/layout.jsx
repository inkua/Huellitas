import { ToastContainer } from 'react-toastify';

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";


export default function Layout({ children }) {
    return (
        <body >
            <header>
                <Navbar />
            </header>

            {children}

            <Footer />

            <ToastContainer />
        </body>
    );
}
