import axios from 'axios';

export default class CRUD {
    static async getPets() {}

    static async createPet(formData) {
        try {
            const response = await axios.post('http://localhost:1337/api/posts/', {
                data: {
                    title: formData.title,
                    description: formData.description,
                },
            });

            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    static async removePet() {}

    static async updatePet() {}
}
