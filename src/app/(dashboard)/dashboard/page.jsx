"use client";

import { useState, useEffect } from "react";
import CRUD from "@/services";
import Table from "./components/Table/Table";

function Dashboard() {
    const [stories, setStories] = useState(null);
    const [refresh, refreshTable] = useState(0); // Refresh callback to reload data from children components

    try {
        useEffect(() => {
            async function load() {
                setStories(await CRUD.getStories());
            }
            load();
        }, [refresh]);

        return (
            <div className="my-12">
                {stories && (
                    <Table data={stories} refreshCallback={refreshTable} />
                )}
            </div>
        );
    } catch (e) {
        console.log(e);
        return <h2>Ha ocurrido un error al cargar las historias.</h2>;
    }
}

export default Dashboard;
