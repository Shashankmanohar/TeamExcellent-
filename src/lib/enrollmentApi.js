import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

/**
 * Submit a new enrollment form
 * @param {Object} enrollmentData - The data from the enrollment form
 * @returns {Promise} - The server response
 */
export const submitEnrollment = async (enrollmentData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/enrollments`, enrollmentData);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

/**
 * Fetch all enrollments (Admin only)
 * @returns {Promise} - List of enrollments
 */
export const fetchEnrollments = async () => {
    try {
        const token = localStorage.getItem('adminToken');
        const response = await axios.get(`${API_BASE_URL}/enrollments`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

/**
 * Delete an enrollment (Admin only)
 * @param {string} id - The ID of the enrollment to delete
 * @returns {Promise} - Success message
 */
export const deleteEnrollment = async (id) => {
    try {
        const token = localStorage.getItem('adminToken');
        const response = await axios.delete(`${API_BASE_URL}/enrollments/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};
