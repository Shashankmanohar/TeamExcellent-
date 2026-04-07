const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Fetch all approved reviews for the public website
 */
export const fetchApprovedReviews = async () => {
    try {
        const response = await fetch(`${API_URL}/reviews`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching reviews:', error);
        throw error;
    }
};

/**
 * Fetch all reviews for admin (requires token)
 */
export const fetchAllReviewsAdmin = async () => {
    const token = localStorage.getItem('adminToken');
    try {
        const response = await fetch(`${API_URL}/reviews/admin`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching all reviews:', error);
        throw error;
    }
};

/**
 * Submit a new review
 */
export const submitReview = async (reviewData) => {
    try {
        const response = await fetch(`${API_URL}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error submitting review:', error);
        throw error;
    }
};

/**
 * Toggle review approval (Admin only)
 */
export const toggleReviewApproval = async (id) => {
    const token = localStorage.getItem('adminToken');
    try {
        const response = await fetch(`${API_URL}/reviews/${id}/toggle-approval`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error toggling approval:', error);
        throw error;
    }
};

/**
 * Delete a review (Admin only)
 */
export const deleteReview = async (id) => {
    const token = localStorage.getItem('adminToken');
    try {
        const response = await fetch(`${API_URL}/reviews/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error deleting review:', error);
        throw error;
    }
};
