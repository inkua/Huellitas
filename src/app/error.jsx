'use client'

import Link from 'next/link'
import styles from './(main)/components/styles/error.module.css'

function Error() {
    return (
        <body className="bg-white xs:bg-gradient-one p-4 b-mob:p-12  b-mob:bg-gradient-two! md:bg-gradient-three flex items-center justify-center gap-[90px] max-w-screen-2xl mx-auto">
            <main className="bg-gray-400 bg-error-mobile md:bg-error-desktop bg-cover bg-no-repeat bg-center aspect-square md:aspect-video w-full lg:w-80% flex items-end justify-center">
                <div>
                    <h1 className={styles.titulo} >UPS! Algo salió mal</h1>
                    <Link href="/" className="hidden md:block text-center text-black text-3xl underline font-medium mt-4">Volver a inicio</Link>
                </div>
            </main>
            <div className="md:hidden">
                <Link href="/" className="block bg-black text-white rounded-[30px] px-8 py-4 text-center text-xs">volver a inicio</Link>
            </div>
        </body>
    )
}
export default Error