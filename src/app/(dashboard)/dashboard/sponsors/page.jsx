"use client";

import { useState, useEffect } from "react";
import CRUD from "@/services";
import SponsorsTable from "../components/Table/SponsorsTable";

function Sponsors() {
    const [sponsors, setSponsors] = useState(null);
    const [refresh, refreshTable] = useState(0);

    try {
        useEffect(() => {
            async function load() {
                setSponsors(await CRUD.getSponsors());
            }
            load();
        }, [refresh]);

        return (
            <div>
                <h2 className="text-xl mb-4 font-bold tracking-tight text-gray-900">
                    Sponsors
                </h2>
                {sponsors && (
                    <SponsorsTable
                        data={sponsors}
                        refreshCallback={refreshTable}
                    />
                )}
            </div>
        );
    } catch (e) {
        console.log(e);
        return <h2>Ha ocurrido un error al cargar los sponsors.</h2>;
    }
}

export default Sponsors;
