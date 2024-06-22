import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuthCheck = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkValidity = () => {
      const isToken = localStorage.getItem('atoken');
      if (!isToken) {
        navigate('/authentication');
      }
    };
    checkValidity();
  }, [navigate]);
};

export default useAuthCheck;
