"use client";

import { useState, useEffect } from "react";
import Table from "./components/Table/Table";

function Dashboard() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [data, setData] = useState(null);
    const [refresh, refreshCallback] = useState(0); // Just to update the data from child components

    async function getData() {
        const res = await fetch(apiUrl + "/historias");
        setData(await res.json());
    }

    useEffect(() => {
        getData();
        //console.log('data en page', data)
    }, [refresh]);

    try {
        return (
            <div className="my-12 min-w-[830px]">
                {data ? (
                    <Table
                        data={data}
                        refreshCallback={refreshCallback}
                        config={{ collection: "historias" }}
                    />
                ) : (
                    <h2>Ha ocurrido un error al cargar las historias.</h2>
                )}
            </div>
        );
    } catch (e) {
        console.log(e);
        return <h2>Ha ocurrido un error al cargar las historias.</h2>;
    }
}

export default Dashboard;
