import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

import { AdminProvider } from "@/components/AdminProvider";

export const metadata = {
    title: "Huellitas Cartagena",
    description:
        "Huellitas es una fundación que se dedica al rescate y cuidado de animales en la ciudad de Cartagena de Indias",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <AdminProvider>{children}</AdminProvider>
        </html>
    );
}
