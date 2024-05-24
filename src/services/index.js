import axios from 'axios';

export default class CRUD {
    static async getPets() {
        try {
            const response = await axios.get('http://localhost:1337/api/posts/');
            return response.data.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async createPet(formData) {
        try {
            const response = await axios.post('http://localhost:1337/api/posts/', {
                data: {
                    title: formData.title,
                    description: formData.description,
                },
            });
        } catch (error) {
            console.log(error);
        }
    }

    static async removePet() {}

    static async updatePet() {}
}
