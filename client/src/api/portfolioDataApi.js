// api/portfolioDataApi.js
import axios from "axios";
// import { BaseURL } from '../helper/BaseURL';
const BaseURL = 'http://localhost:9000/api/v1'

export const getPortfolioData = async () => {
    try {
        const response = await axios.get(`${BaseURL}/`);
        console.log('Response from API:', response.data);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};
