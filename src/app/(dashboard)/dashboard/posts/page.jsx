import CRUD from "@/services";
import PostsTable from "../components/Table/PostsTable";

async function Posts() {
    try {
        const posts = await CRUD.getPosts();
        return (
            <div>
                <PostsTable data={posts} />
            </div>
        );
    } catch (e) {
        console.log(e);
        return <h2>Ha ocurrido un error al cargar los posts.</h2>;
    }
}

export default Posts;
