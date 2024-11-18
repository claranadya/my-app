import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="container mx-auto px-4 py-6">
    <div className="flex items-center justify-between">
      <Link to="/" className="text-xl font-semibold text-pink-600">
        Crème Dreams
      </Link>
      
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-gray-600 hover:text-pink-800">
          Home
        </Link>
        <Link to="/catalog" className="text-gray-600 hover:text-pink-600">
          Catalog
        </Link>
        <Link to="/how-to-order" className="text-gray-600 hover:text-pink-600">
          How to order
        </Link>
        <Link to="/delivery" className="text-gray-600 hover:text-pink-600">
          Delivery
        </Link>
        <Link to="/contacts" className="text-gray-600 hover:text-pink-600">
          Contacts
        </Link>
      </div>
      
      <div className="flex space-x-4">
        <a href="#" className="text-pink-600 hover:text-pink-800">
          <i className="bi bi-facebook text-xl"></i>
        </a>
        <a href="#" className="text-pink-600 hover:text-pink-800">
          <i className="bi bi-instagram text-xl"></i>
        </a>
        <a href="#" className="text-pink-600 hover:text-pink-800">
          <i className="bi bi-twitter text-xl"></i>
        </a>
      </div>
    </div>
  </nav>

  );
}