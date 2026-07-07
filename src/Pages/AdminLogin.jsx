import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import AdminMarks from '../Components/AdminMarks';

export default function AdminLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("adminToken"));

  useEffect(() => {
    const checkAuth = () => {
      setIsLoggedIn(!!localStorage.getItem("adminToken"));
    };
    checkAuth();
    // Periodically check or listen to storage events
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  return (
    <>
      {!isLoggedIn && <Navbar />}
      <AdminMarks />
    </>
  );
}
