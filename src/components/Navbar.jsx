import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const Navbar = () => {
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
        
        <div className="flex items-center">
          <button className="text-pink-600 hover:text-gray-900">
            <BsSearch size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;