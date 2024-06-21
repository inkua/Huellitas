import axios from "axios";

export default class CRUD {
    static async getStories() {
        try {
            const response = await axios.get(
                "http://localhost:1337/api/stories?populate=*"
            );
            return response.data.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async createStory(item, image) {
        try {
            let formData = new FormData();
            formData.append("files", image);

            const newImage = await axios.post(
                "http://localhost:1337/api/upload",
                formData
            );
            item.data.image = newImage.data[0].id;

            await axios.post("http://localhost:1337/api/stories/", item);
        } catch (error) {
            console.log(error);
        }
    }

    static async updateStory(id, item) {
        try {
            await axios.put("http://localhost:1337/api/stories/" + id, item);
        } catch (error) {
            console.log(error);
        }
    }

    static async removeStory(item) {
        try {
            await axios.delete("http://localhost:1337/api/stories/" + item.id);

            await axios.delete(
                "http://localhost:1337/api/upload/files/" +
                    item.attributes.image.data.id
            );
        } catch (error) {
            console.log(error);
        }
    }

    static async getPosts() {
        try {
            const response = await axios.get(
                "http://localhost:1337/api/posts?populate=*"
            );
            return response.data.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async createPost(item, image) {
        try {
            let formData = new FormData();
            formData.append("files", image);

            const newImage = await axios.post(
                "http://localhost:1337/api/upload",
                formData
            );
            item.data.image = newImage.data[0].id;

            await axios.post("http://localhost:1337/api/posts/", item);
        } catch (error) {
            console.log(error);
        }
    }

    static async updatePost(id, item) {
        try {
            await axios.put("http://localhost:1337/api/posts/" + id, item);
        } catch (error) {
            console.log(error);
        }
    }

    static async removePost(item) {
        try {
            await axios.delete("http://localhost:1337/api/posts/" + item.id);

            await axios.delete(
                "http://localhost:1337/api/upload/files/" +
                    item.attributes.image.data.id
            );
        } catch (error) {
            console.log(error);
        }
    }

    static async getSponsors() {
        try {
            const response = await axios.get(
                "http://localhost:1337/api/sponsors?populate=*"
            );
            return response.data.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async createSponsor(item, image) {
        try {
            let formData = new FormData();
            formData.append("files", image);

            const newImage = await axios.post(
                "http://localhost:1337/api/upload",
                formData
            );
            item.data.image = newImage.data[0].id;

            await axios.post("http://localhost:1337/api/sponsors/", item);
        } catch (error) {
            console.log(error);
        }
    }

    static async updateSponsor(id, item) {
        try {
            await axios.put("http://localhost:1337/api/sponsors/" + id, item);
        } catch (error) {
            console.log(error);
        }
    }

    static async removeSponsor(item) {
        try {
            await axios.delete("http://localhost:1337/api/sponsors/" + item.id);

            await axios.delete(
                "http://localhost:1337/api/upload/files/" +
                    item.attributes.image.data.id
            );
        } catch (error) {
            console.log(error);
        }
    }
}
