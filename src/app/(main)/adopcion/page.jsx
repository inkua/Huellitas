import FAQ_Adopcion from '../components/FAQ_Adopcion/FAQ_Adopcion'
import Card from './components/Card/Card'

const animals = [
    {
        id: 1,
        name: 'MAX 1',
        age: 3,
        source: '/assets/Adopcion/adopcion_001.jpg',
    },
    {
        id: 2,
        name: 'MAX 2',
        age: 3,
        source: '/assets/Adopcion/adopcion_001.jpg',
    },
    {
        id: 3,
        name: 'MAX 3',
        age: 3,
        source: '/assets/Adopcion/adopcion_001.jpg',
    },
    {
        id: 4,
        name: 'MAX 4',
        age: 3,
        source: '/assets/Adopcion/adopcion_001.jpg',
    },
    {
        id: 5,
        name: 'MAX 5',
        age: 3,
        source: '/assets/Adopcion/adopcion_001.jpg',
    },
    {
        id: 6,
        name: 'MAX 6',
        age: 3,
        source: '/assets/Adopcion/adopcion_001.jpg',
    },
]

function Adopcion() {
    return (
        <main>
            <section className='w-full h-72 lg:bg-tertiaryColor' role='section'>
                <div className="flex w-full h-full max-w-screen-2xl mx-auto items-end lg:justify-center lg:items-center p-8 lg:p-0 lg:py-16 bg-adoption-banner lg:bg-none bg-cover bg-opacity-80">
                    <div className="flex flex-col w-full lg:w-9/12 gap-8">
                        <h1 className="font-bold heading-1 !text-white lg:!text-primaryFont">ADOPTALOS</h1>
                        <p className="hidden lg:block font-normal par-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloret.
                        </p>
                    </div>
                </div>
            </section>

            <section className="flex w-full max-w-screen-2xl mx-auto justify-center items-center py-16" role='section'>
                <div className="flex flex-col w-full lg:w-9/12 gap-y-20">
                    <h1 className="hidden lg:block font-bold heading-1">BUSCAMOS UN HOGAR CON AMOR</h1>
                    <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 px-4 gap-x-4 lg:gap-x-16 gap-y-20" role='list'>
                        {
                            animals.map(animal => (
                                    <Card
                                        key={animal.id}
                                        name={animal.name}
                                        age={animal.age}
                                        source={animal.source}
                                        role={'listItem'}
                                    />
                            ))
                        }
                    </div>
                </div>
            </section>
            
            <section className='bg-tertiaryColor py-16' role='section'>
                <div className='max-w-screen-2xl mx-auto'>
                    <FAQ_Adopcion />
                </div>
            </section>
        </main>
    )
}

export default Adopcion