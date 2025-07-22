import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com/api'; // Replace with your actual API URL

export const fetchStories = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/stories`);
        return response.data;
    } catch (error) {
        console.error('Error fetching stories:', error);
        throw error;
    }
};

export const submitAppointment = async (appointmentData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/appointments`, appointmentData);
        return response.data;
    } catch (error) {
        console.error('Error submitting appointment:', error);
        throw error;
    }
};

// Add more API functions as needed for your application.