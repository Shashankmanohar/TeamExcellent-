import axios from 'axios';

// Use environment variable for API URL
const API_URL = `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'}/blogs`;

// Get auth token from localStorage
const getAuthToken = () => {
    return localStorage.getItem('adminToken');
};

// Create axios instance with auth header
const createAuthConfig = () => {
    const token = getAuthToken();
    return {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    };
};

// Public API calls
export const fetchPublishedBlogs = async (page = 1, limit = 10, category = '') => {
    try {
        const params = { page, limit };
        if (category) params.category = category;

        const response = await axios.get(`${API_URL}/published`, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching published blogs:', error);
        throw error;
    }
};

export const fetchBlogByPermalink = async (permalink) => {
    try {
        const response = await axios.get(`${API_URL}/permalink/${permalink}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching blog by permalink:', error);
        throw error;
    }
};

// Admin API calls (require authentication)
export const fetchAllBlogs = async (page = 1, limit = 10) => {
    try {
        const response = await axios.get(`${API_URL}/all`, {
            ...createAuthConfig(),
            params: { page, limit }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching all blogs:', error);
        throw error;
    }
};

export const fetchBlogById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`, createAuthConfig());
        return response.data;
    } catch (error) {
        console.error('Error fetching blog by ID:', error);
        throw error;
    }
};

export const createBlog = async (blogData) => {
    try {
        const response = await axios.post(API_URL, blogData, createAuthConfig());
        return response.data;
    } catch (error) {
        console.error('Error creating blog:', error);
        throw error;
    }
};

export const updateBlog = async (id, blogData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, blogData, createAuthConfig());
        return response.data;
    } catch (error) {
        console.error('Error updating blog:', error);
        throw error;
    }
};

export const deleteBlog = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`, createAuthConfig());
        return response.data;
    } catch (error) {
        console.error('Error deleting blog:', error);
        throw error;
    }
};

export const togglePublishStatus = async (id) => {
    try {
        const response = await axios.patch(`${API_URL}/${id}/publish`, {}, createAuthConfig());
        return response.data;
    } catch (error) {
        console.error('Error toggling publish status:', error);
        throw error;
    }
};
