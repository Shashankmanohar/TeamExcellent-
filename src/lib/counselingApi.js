import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

/**
 * Submit a new counseling request
 * @param {Object} data - { fullName, contactNumber, targetExam }
 * @returns {Promise}
 */
export const submitCounselingRequest = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/counseling`, data);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

/**
 * Fetch all counseling requests (Admin only)
 * @returns {Promise}
 */
export const fetchCounselingRequests = async () => {
    try {
        const token = localStorage.getItem('adminToken');
        const response = await axios.get(`${API_BASE_URL}/counseling`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

/**
 * Delete a counseling request (Admin only)
 * @param {string} id
 * @returns {Promise}
 */
export const deleteCounselingRequest = async (id) => {
    try {
        const token = localStorage.getItem('adminToken');
        const response = await axios.delete(`${API_BASE_URL}/counseling/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

/**
 * Update counseling request status/notes (Admin only)
 * @param {string} id
 * @param {Object} updateData - { status, notes }
 * @returns {Promise}
 */
export const updateCounselingRequestStatus = async (id, updateData) => {
    try {
        const token = localStorage.getItem('adminToken');
        const response = await axios.patch(`${API_BASE_URL}/counseling/${id}`, updateData, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};
