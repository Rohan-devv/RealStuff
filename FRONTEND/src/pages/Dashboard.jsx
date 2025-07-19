import { useEffect, useState } from 'react';
import API from '../utils/api';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await API.get('/auth/dashboard');

        setUser(data.user); // Assuming the backend sends user object with email
      } catch (err) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">Welcome to Your Dashboard</h2>
        {user ? (
          <div className="text-center">
            <p className="text-lg">Logged in as:</p>
            <p className="text-xl font-semibold text-gray-800">{user.email}</p>
          </div>
        ) : (
          <p className="text-center text-gray-600">Loading user information...</p>
        )}
      </div>
    </div>
  );
}
