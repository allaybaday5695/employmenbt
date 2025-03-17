import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const fetchJobListings = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/job-listings`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching job listings: ' + error.message);
    }
};

export const fetchJobDetails = async (jobId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/job-listings/${jobId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching job details: ' + error.message);
    }
};