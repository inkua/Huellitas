
import "./globals.css";

export const metadata = {
    title: "Huellitas",
    description: "Huellitas es una fundación que se dedica al rescate y cuidado de animales en la ciudad de Cartagena de Indias",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            {children}
        </html>
    );
}
