import Footer from "./componets/Footer/Footer";
import Navbar from "./componets/Navbar/Navbar";

export default function Layout({ children }) {
    return (
        <body >
            <header>
                <Navbar />
            </header>

            {children}

            <Footer />
        </body>
    );
}
