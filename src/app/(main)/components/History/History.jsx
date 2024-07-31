"use client"

import { useState, useEffect } from 'react'

import Slider from '../Slider/Slider'

function History() {
    const [items, setItem] = useState(null);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    async function setData() {
        const res = await fetch(apiUrl + "/historias");
        setItem(await res.json());
    }

    useEffect(() => {
        setData();
    }, []);

    console.log(items);

    return (
        <section className='flex flex-col w-full max-w-screen-2xl mx-auto justify-center items-center gap-8 py-8 md:py-10 lg:py-16 bg-white'>
            <h1 className='w-[90%] lg:w-9/12 font-bold heading-1 text-left'>SIGUE SUS HISTORIAS</h1>
            {items && <Slider items={items} type={0} def={1} md={2} lg={3} loop={true} nav={true}></Slider>}
        </section>

    )
}

export default History
