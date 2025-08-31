import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Star } from 'lucide-react';
import FeedbackForm from './FeedbackForm';

const Footer = () => {
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <>
      <footer className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-4 py-3 rounded-lg font-bold text-xl shadow-lg">
                  IMovie
                </div>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed">
                Your premier destination for movie ticket booking in Andhra Pradesh.
                Experience the magic of cinema with the best theaters and latest movies.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors">
                  <div className="p-2 rounded-full bg-blue-900 hover:bg-blue-700 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </div>
                </a>
                <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors">
                  <div className="p-2 rounded-full bg-blue-900 hover:bg-blue-700 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </div>
                </a>
                <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors">
                  <div className="p-2 rounded-full bg-blue-900 hover:bg-blue-700 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </div>
                </a>
                <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors">
                  <div className="p-2 rounded-full bg-blue-900 hover:bg-blue-700 transition-colors">
                    <Youtube className="h-5 w-5" />
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-blue-200 hover:text-blue-400 transition-colors text-sm hover:pl-2 duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/movies" className="text-blue-200 hover:text-blue-400 transition-colors text-sm hover:pl-2 duration-300">
                    Movies
                  </Link>
                </li>
                <li>
                  <Link to="/theaters" className="text-blue-200 hover:text-blue-400 transition-colors text-sm hover:pl-2 duration-300">
                    Theaters
                  </Link>
                </li>
                <li>
                  <Link to="/offers" className="text-blue-200 hover:text-blue-400 transition-colors text-sm hover:pl-2 duration-300">
                    Offers & Deals
                  </Link>
                </li>
                <li>
                  <Link to="/gift-cards" className="text-blue-200 hover:text-blue-400 transition-colors text-sm hover:pl-2 duration-300">
                    Gift Cards
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Customer Support</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setShowFeedback(true)}
                    className="text-blue-200 hover:text-blue-400 transition-colors text-sm hover:pl-2 duration-300 flex items-center space-x-1"
                  >
                    <Star className="h-3 w-3" />
                    <span>Give Feedback</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-900 transition-colors">
                  <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-blue-200">Customer Care</p>
                    <p className="text-sm font-semibold text-blue-100">+91 0000000000</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-900 transition-colors">
                  <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-blue-200">Email Support</p>
                    <p className="text-sm font-semibold text-blue-100">support@imovieshow.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-blue-900 transition-colors">
                  <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-blue-200">Head Office</p>
                    <p className="text-sm font-semibold text-blue-100">
                      Aitam-clg, Srikakulam<br />
                      Andhra Pradesh, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-blue-200 mb-4 md:mb-0">
              © 2024 IMovieShow. All rights reserved. | Made with <span className="text-blue-400">💙</span> for movie lovers
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/terms" className="text-blue-200 hover:text-blue-400 transition-colors hover:underline">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-blue-200 hover:text-blue-400 transition-colors hover:underline">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-blue-200 hover:text-blue-400 transition-colors hover:underline">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="text-blue-200 hover:text-blue-400 transition-colors hover:underline">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {showFeedback && (
        <FeedbackForm onClose={() => setShowFeedback(false)} />
      )}
    </>
  );
};

export default Footer;
