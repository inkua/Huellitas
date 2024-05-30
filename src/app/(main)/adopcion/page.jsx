
import FAQ_Adopcion from '../componets/FAQ_Adopcion/FAQ_Adopcion'
import Card from './compontens/Card/Card'

function Adopcion() {

    return (
        <section>
            <div className='w-full h-72 lg:bg-tertiaryColor'>
                <div className="flex w-full h-full max-w-screen-2xl mx-auto items-end lg:justify-center lg:items-center p-8 lg:p-0 lg:py-16 bg-adoption-banner lg:bg-none bg-cover bg-opacity-80">
                    <div className="flex flex-col w-full lg:w-9/12 gap-8">
                        <h1 className="font-bold heading-1">ADOPTALOS</h1>
                        <p className="hidden lg:block font-normal par-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloret.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex w-full max-w-screen-2xl mx-auto justify-center items-center py-16">
                <div className="flex flex-col w-full lg:w-9/12 gap-y-20">
                    <h1 className="hidden lg:block font-bold heading-1">BUSCAMOS UN HOGAR CON AMOR</h1>
                    <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 px-4 gap-x-4 lg:gap-x-16 gap-y-20">
                        <Card/>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>

            </div>
            <div className='bg-tertiaryColor py-16'>
                <div className='max-w-screen-2xl mx-auto'>
                    <FAQ_Adopcion />
                </div>
            </div>
        </section>
    )
}

export default Adopcion