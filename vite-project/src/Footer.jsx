import React from 'react'

const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-400 text-white px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <h2 className="text-xl font-bold mb-2">Mom's Collection</h2>
            <p className="text-sm">
              Empowering innovation through cutting-edge technology solutions.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
  
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#">Handcraft</a></li>
              <li><a href="#">Custom Design</a></li>
              <li><a href="#">Textile</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
          </div>
  
          {/* Social & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex gap-3 mb-4">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <p className="text-sm font-semibold mb-1">Subscribe to our newsletter</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l bg-purple-100 text-black text-sm w-full focus:outline-none"
              />
              <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-r text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  