import axios from "axios";

export default class CRUD {
    static async getPosts() {
        try {
            const response = await axios.get(
                "http://localhost:1337/api/posts/"
            );
            return response.data.data;
        } catch (error) {
            console.log(error);
        }
    }

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
}
