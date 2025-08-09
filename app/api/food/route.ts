import axios from 'axios';

const BASE_URL = 'https://6852821e0594059b23cdd834.mockapi.io';

export async function GET() {
    const response = await axios.get(`${BASE_URL}/Food`);
    return response.data;
}
