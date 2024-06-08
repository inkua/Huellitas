import Slider from '../Slider/Slider'

let items = [
    {
        id: 1,
        par: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea cumque ad iure quaerat totam?',
        btn: 'SABER MAS...',
        source: '/assets/History/history_001.jpg',
    },
    {
        id: 2,
        par: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea cumque ad iure quaerat totam?',
        btn: 'SABER MAS...',
        source: '/assets/History/history_002.jpg',
    },
    {
        id: 3,
        par: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea cumque ad iure quaerat totam?',
        btn: 'SABER MAS...',
        source: '/assets/History/history_003.jpg',
    },
    {
        id: 4,
        par: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea cumque ad iure quaerat totam?',
        btn: 'SABER MAS...',
        source: '/assets/History/history_001.jpg',
    },
]

function History() {
    return (
        <main>
            <section className='flex flex-col w-full max-w-screen-2xl mx-auto justify-center items-center gap-8 py-16 bg-white'>
                <h1 className='w-11/12 lg:w-9/12 font-bold heading-1 text-left'>SIGUE SUS HISTORIAS</h1>
                <Slider items={items} type={1} def={1.1} md={2.15} lg={3.15}></Slider>
            </section>

        </main>
    )
}

export default History
