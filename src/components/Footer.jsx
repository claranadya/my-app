import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white pt-10 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Crème Dreams</h3>
            <p className="text-gray-500 text-sm mb-4">
              Kami menyediakan kue berkualitas tinggi dengan pengiriman di hari yang sama untuk area Kota Jambi.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Ikuti Kami di Media Sosial</h3>
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

          <div className="col-span-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-500 hover:text-pink-600 text-sm">Home</a></li>
              <li><a href="/catalog" className="text-gray-500 hover:text-pink-600 text-sm">Catalog</a></li>
              <li><a href="/how-to-order" className="text-gray-500 hover:text-pink-600 text-sm">How to Order</a></li>
              <li><a href="/delivery" className="text-gray-500 hover:text-pink-600 text-sm">Delivery</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <i className="bi bi-geo-alt text-pink-600"></i>
                <span className="text-gray-500 text-sm">Thehok, Kota Jambi</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="bi bi-telephone text-pink-600"></i>
                <span className="text-gray-500 text-sm">+62 123 456 789</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="bi bi-envelope text-pink-600"></i>
                <span className="text-gray-500 text-sm">info@Crème Dreams.com</span>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Newsletter</h3>
            <p className="text-gray-500 text-sm mb-4">
              Subscribe untuk mendapatkan update terbaru dan penawaran spesial
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-pink-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-800 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-center text-gray-500 text-sm">
            © 2024 Crème Dreams. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;