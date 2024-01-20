import axios from 'axios';

const API_URL = 'http://localhost:3000/api/users/';

export const createUser = async (user) => {
    try {
        const response = await axios.post(API_URL, user);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }

