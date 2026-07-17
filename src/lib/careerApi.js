import axios from 'axios';

// Get base URL depending on environment
const getBaseUrl = () => {
    // If we're in production on Vercel
    if (import.meta.env.VITE_API_BASE_URL) {
        return import.meta.env.VITE_API_BASE_URL;
    }
    if (import.meta.env.VITE_API_URL) {
        return import.meta.env.VITE_API_URL;
    }
    // Default to local development
    return 'http://localhost:5000/api';
};

const API_URL = `${getBaseUrl()}/careers`;

const getHeaders = () => {
    const token = localStorage.getItem('adminToken');
    return {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
};

export const fetchAllCareers = async () => {
    const response = await axios.get(`${API_URL}/all/admin`, getHeaders());
    return response.data;
};

export const fetchActiveCareers = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const fetchCareerById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createCareer = async (careerData) => {
    const response = await axios.post(API_URL, careerData, getHeaders());
    return response.data;
};

export const updateCareer = async (id, careerData) => {
    const response = await axios.put(`${API_URL}/${id}`, careerData, getHeaders());
    return response.data;
};

export const deleteCareer = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`, getHeaders());
    return response.data;
};

export const toggleCareerStatus = async (id) => {
    const response = await axios.patch(`${API_URL}/${id}/status`, {}, getHeaders());
    return response.data;
};
