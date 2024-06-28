import axios from "axios";

export default class CRUD {
    static formatToken(token) {
        return {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
    }

    static async getPermisions(token) {
        try {
            const response = await axios.get(
                `http://localhost:1337/api/users/me?populate=*`,
                this.formatToken(token)
            );
            return response.data;
        } catch (error) {
            console.log(error.response);
        }
    }

    static async getStories() {
        try {
            const response = await axios.get(
                "http://localhost:1337/api/stories?populate=*"
            );
            return response.data.data;
        } catch (error) {
            console.log(error.response);
        }
    }

    static async createStory(item, image, token) {
        try {
            let formData = new FormData();
            formData.append("files", image);

            const newImage = await axios.post(
                "http://localhost:1337/api/upload",
                formData,
                CRUD.formatToken(token)
            );
            item.data.image = newImage.data[0].id;

            await axios.post(
                "http://localhost:1337/api/stories/",
                item,
                CRUD.formatToken(token)
            );
        } catch (error) {
            console.log(error.response);
        }
    }

    static async updateStory(id, item, token) {
        try {
            await axios.put(
                "http://localhost:1337/api/stories/" + id,
                item,
                CRUD.formatToken(token)
            );
        } catch (error) {
            console.log(error.response);
        }
    }

    static async removeStory(item, token) {
        try {
            await axios.delete(
                "http://localhost:1337/api/stories/" + item.id,
                CRUD.formatToken(token)
            );

            await axios.delete(
                "http://localhost:1337/api/upload/files/" +
                    item.attributes.image.data.id,
                CRUD.formatToken(token)
            );
        } catch (error) {
            console.log(error.response);
        }
    }

    static async getPosts() {
        try {
            const response = await axios.get(
                "http://localhost:1337/api/posts?populate=*"
            );
            return response.data.data;
        } catch (error) {
            console.log(error.response);
        }
    }

    static async createPost(item, image, token) {
        try {
            let formData = new FormData();
            formData.append("files", image);

            const newImage = await axios.post(
                "http://localhost:1337/api/upload",
                formData,
                CRUD.formatToken(token)
            );
            item.data.image = newImage.data[0].id;

            await axios.post(
                "http://localhost:1337/api/posts/",
                item,
                CRUD.formatToken(token)
            );
        } catch (error) {
            console.log(error.response);
        }
    }

    static async updatePost(id, item, token) {
        try {
            await axios.put(
                "http://localhost:1337/api/posts/" + id,
                item,
                CRUD.formatToken(token)
            );
        } catch (error) {
            console.log(error.response);
        }
    }

    static async removePost(item, token) {
        try {
            await axios.delete(
                "http://localhost:1337/api/posts/" + item.id,
                CRUD.formatToken(token)
            );

            await axios.delete(
                "http://localhost:1337/api/upload/files/" +
                    item.attributes.image.data.id,
                CRUD.formatToken(token)
            );
        } catch (error) {
            console.log(error.response);
        }
    }

    static async getSponsors() {
        try {
            const response = await axios.get(
                "http://localhost:1337/api/sponsors?populate=*"
            );
            return response.data.data;
        } catch (error) {
            console.log(error.response);
        }
    }

    static async createSponsor(item, image, token) {
        try {
            let formData = new FormData();
            formData.append("files", image);

            const newImage = await axios.post(
                "http://localhost:1337/api/upload",
                formData,
                CRUD.formatToken(token)
            );
            item.data.image = newImage.data[0].id;

            await axios.post(
                "http://localhost:1337/api/sponsors/",
                item,
                CRUD.formatToken(token)
            );
        } catch (error) {
            console.log(error.response);
        }
    }

    static async updateSponsor(id, item, token) {
        try {
            await axios.put(
                "http://localhost:1337/api/sponsors/" + id,
                item,
                CRUD.formatToken(token)
            );
        } catch (error) {
            console.log(error.response);
        }
    }

    static async removeSponsor(item, token) {
        try {
            await axios.delete(
                "http://localhost:1337/api/sponsors/" + item.id,
                CRUD.formatToken(token)
            );

            await axios.delete(
                "http://localhost:1337/api/upload/files/" +
                    item.attributes.image.data.id,
                CRUD.formatToken(token)
            );
        } catch (error) {
            console.log(error.response);
        }
    }
}
