"use client";

import { useState, useEffect } from "react";
import CRUD from "@/services";
import PostsTable from "../components/Table/PostsTable";

function Posts() {
    const [posts, setPosts] = useState(null);
    const [refresh, refreshTable] = useState(0);

    try {
        useEffect(() => {
            async function load() {
                setPosts(await CRUD.getPosts());
            }
            load();
        }, [refresh]);

        return (
            <div>
                <h2 className="text-xl mb-4 font-bold tracking-tight text-gray-900">
                    Posteos
                </h2>
                {posts && (
                    <PostsTable data={posts} refreshCallback={refreshTable} />
                )}
            </div>
        );
    } catch (e) {
        console.log(e);
        return <h2>Ha ocurrido un error al cargar los posts.</h2>;
    }
}

export default Posts;
