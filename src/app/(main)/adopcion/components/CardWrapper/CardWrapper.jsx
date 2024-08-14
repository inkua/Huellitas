"use client";

import Card from "../Card/Card";
import { useEffect, useState } from "react";

export default function CardWrapper() {
    const [animals, setAnimals] = useState(null);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    async function setData() {
        const res = await fetch(apiUrl + "/adopciones");
        setAnimals(await res.json());
    }

    useEffect(() => {
        setData();
    }, []);

    return (
        <>
            {animals &&
                animals.map((animal) => (
                    <Card
                        key={animal.id}
                        name={animal.data.nombre}
                        age={animal.data.edad}
                        gender={animal.data.genero}
                        story={animal.data.historia}
                        characteristics={animal.data.caracteristicas}
                        source={animal.data.imagen}
                        type={animal.data.type}
                        role={"listItem"}
                    />
                ))}
        </>
    );
}
