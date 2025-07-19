import { Link } from 'react-router-dom';

export default function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li>
          {localStorage.getItem('token') ? (
            <button onClick={handleLogout} className="bg-red-600 px-4 py-2 rounded">Logout</button>
          ) : null}
        </li>
      </ul>
    </nav>
  );
}
