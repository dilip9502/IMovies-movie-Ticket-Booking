import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, User, Menu, X } from 'lucide-react';

const locations = [
  'Visakhapatnam (Vizag)', 'Vijayawada', 'Guntur', 'Nellore', 'Tirupati',
  'Kurnool', 'Rajahmundry', 'Eluru', 'Anantapur', 'Kadapa', 'Chittoor',
  'Srikakulam', 'Narasaraopet', 'Mangalagiri', 'Kakinada', 'Tadepalligudem', 'Bhimavaram'
];

const Header = ({ user, onLogout, selectedLocation, setSelectedLocation }) => {
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 bg-blue-950/95 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-3 py-2 rounded-lg font-bold text-xl shadow">
              IMovie
            </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/#now-showing" 
              className="text-blue-100 hover:text-blue-400 transition-colors font-medium"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  const element = document.getElementById('now-showing');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
            >
              Movies
            </Link>
            <Link to="/theaters" className="text-blue-100 hover:text-blue-400 transition-colors font-medium">
              Theaters
            </Link>
            <Link to="/contact" className="text-blue-100 hover:text-blue-400 transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Location Selector */}
          <div className="relative z-50">
            <button
              onClick={() => setShowLocationDropdown(!showLocationDropdown)}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-blue-900 hover:bg-blue-900 hover:shadow transition-colors shadow-sm bg-blue-950/90"
            >
              <MapPin className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-100 truncate max-w-32">
                {selectedLocation.split('(')[0].trim()}
              </span>
              <svg className="h-4 w-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showLocationDropdown && (
              <div className="absolute right-0 mt-2 w-72 bg-blue-950 rounded-xl shadow-2xl border border-blue-900 z-50 max-h-80 overflow-y-auto">
                <div className="p-3 border-b border-blue-800">
                  <h3 className="font-semibold text-blue-100">Select Your City</h3>
                </div>
                {locations.map((location) => (
                  <button
                    key={location}
                    onClick={() => {
                      setSelectedLocation(location);
                      setShowLocationDropdown(false);
                    }}
                    className={`w-full text-left px-4 py-3 hover:bg-blue-900 transition-colors border-b border-blue-900 last:border-b-0 ${
                      selectedLocation === location ? 'bg-blue-800 text-blue-300 font-medium' : 'text-blue-100'
                    }`}
                  >
                    {location}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="relative z-40">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors border border-blue-900 shadow-sm"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="hidden md:block text-sm font-medium text-blue-100">
                    {user.name}
                  </span>
                  <svg className="h-4 w-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-52 bg-blue-950 rounded-xl shadow-2xl border border-blue-900 z-50">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-3 text-sm text-blue-100 hover:bg-blue-900 border-b border-blue-900"
                      onClick={() => setShowUserMenu(false)}
                    >
                      My Bookings
                    </Link>
                    {user.role === 'admin' && (
                      <Link
                        to="/admin"
                        className="block px-4 py-3 text-sm text-blue-100 hover:bg-blue-900 border-b border-blue-900"
                        onClick={() => setShowUserMenu(false)}
                      >
                        Admin Panel
                      </Link>
                    )}
                    <button
                      onClick={() => {
                        onLogout();
                        setShowUserMenu(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-sm text-blue-400 hover:bg-blue-900 rounded-b-xl"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-blue-100 hover:text-blue-400 transition-colors rounded-lg hover:bg-blue-900"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-2 bg-gradient-to-r from-blue-700 to-blue-800 text-white text-sm font-medium rounded-lg hover:from-blue-800 hover:to-blue-900 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2 rounded-lg hover:bg-blue-900 border border-blue-900"
            >
              {showMobileMenu ? <X className="h-5 w-5 text-blue-200" /> : <Menu className="h-5 w-5 text-blue-200" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden border-t border-blue-900 bg-blue-950 shadow-lg">
            <div className="p-4 space-y-4">
              {/* Mobile Navigation Links */}
              <nav className="space-y-2">
                <Link
                  to="/#now-showing"
                  className="block px-4 py-3 text-blue-100 border border-blue-800 rounded-lg hover:bg-blue-900"
                  onClick={(e) => {
                    setShowMobileMenu(false);
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      const element = document.getElementById('now-showing');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  Movies
                </Link>
                <Link
                  to="/theaters"
                  className="block px-4 py-3 text-blue-100 border border-blue-800 rounded-lg hover:bg-blue-900"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Theaters
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-3 text-blue-100 border border-blue-800 rounded-lg hover:bg-blue-900"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Contact
                </Link>
              </nav>

              {/* Mobile User Actions */}
              {!user && (
                <div className="space-y-2">
                  <Link
                    to="/login"
                    className="block w-full text-center px-4 py-3 text-blue-100 border border-blue-800 rounded-lg hover:bg-blue-900"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-lg hover:from-blue-800 hover:to-blue-900"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
