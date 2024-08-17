import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

import { AdminProvider } from "@/components/AdminProvider";

export const metadata = {
    title: "Huellitas Cartagena",
    description:
        "La fundación Huellitas Cartagena se dedica al rescate y cuidado de animales en Cartagena de Indias. Explora nuestro sitio para conocer más sobre nuestras actividades, cómo trabajamos para proteger y mejorar la vida de los animales, y cómo puedes contribuir a nuestra causa.",
};
export const viewport = {
    themeColor: '#6C5CE7',
}

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <AdminProvider>{children}</AdminProvider>
        </html>
    );
}
