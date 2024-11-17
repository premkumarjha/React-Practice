import React,{ useEffect } from  'react';
import { useNavigate ,Navigate,Outlet,useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const CheckAuthCompo=()=>{
  const navigate = useNavigate();
  const { status,posts,isLoading, error } = useSelector((state) => state.posts);
  const location = useLocation();
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
       // const response = await fetch('/api/check-auth-status'); // Replace with your API endpoint
       if (status === 200) {
        navigate('/'); 
      }
        if (status === 401) {
          navigate('/login'); // Redirect to login if status is 401
        }
        
      } catch (error) {
        console.error('Error checking authentication status:', error);
      }
    };

    checkAuthStatus();
  }, [navigate]);


  return (
    <Outlet />
  );

}

export default CheckAuthCompo;