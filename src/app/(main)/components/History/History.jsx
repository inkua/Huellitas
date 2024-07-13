import Slider from '../Slider/Slider'

let items = [
    {
        id: 1,
        par: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea cumque ad iure quaerat totam?',
        btn: 'SABER MAS...',
        source: 'https://res.cloudinary.com/dorljfo6v/image/upload/v1717957502/huellitas/home-siguesushistorias-1_aezlpd.png',
    },
    {
        id: 2,
        par: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea cumque ad iure quaerat totam?',
        btn: 'SABER MAS...',
        source: 'https://res.cloudinary.com/dorljfo6v/image/upload/v1717957511/huellitas/home-siguesushistorias-2_ishlvs.png',
    },
    {
        id: 3,
        par: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea cumque ad iure quaerat totam?',
        btn: 'SABER MAS...',
        source: 'https://res.cloudinary.com/dorljfo6v/image/upload/v1717957513/huellitas/home-siguesushistorias-3_usoorq.png',
    },
    {
        id: 4,
        par: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea cumque ad iure quaerat totam?',
        btn: 'SABER MAS...',
        source: 'https://res.cloudinary.com/dorljfo6v/image/upload/v1717957502/huellitas/home-siguesushistorias-1_aezlpd.png',
    },
]

function History() {
    return (
        <section className='flex flex-col w-full max-w-screen-2xl mx-auto justify-center items-center gap-8 py-8 md:py-10 lg:py-16 bg-white'>
            <h1 className='w-[90%] lg:w-9/12 font-bold heading-1 text-left'>SIGUE SUS HISTORIAS</h1>
            <Slider items={items} type={0} def={1} md={2} lg={3}></Slider>
        </section>

    )
}

export default History
