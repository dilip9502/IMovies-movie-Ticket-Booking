import React, { useState } from 'react';
import { X, Star, Send } from 'lucide-react';

const FeedbackForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    rating: 0,
    category: 'general',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingClick = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert('Thank you for your feedback! We appreciate your input.');
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-blue-950 bg-opacity-90 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-blue-900 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-blue-800">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-4 flex items-center justify-between rounded-t-lg shadow">
          <h2 className="text-2xl font-bold">Share Your Feedback</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6 bg-blue-950">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-blue-200 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-blue-800 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-blue-900 text-white placeholder-blue-300 transition-colors"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-200 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-blue-800 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-blue-900 text-white placeholder-blue-300 transition-colors"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-200 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-blue-800 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-blue-900 text-white placeholder-blue-300 transition-colors"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-blue-200 mb-2">
              Overall Experience *
            </label>
            <div className="flex items-center space-x-2 p-4 bg-blue-800 rounded-lg shadow-inner">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingClick(star)}
                  className={`h-10 w-10 transition-all duration-200 hover:scale-110 ${
                    star <= formData.rating ? 'text-yellow-400' : 'text-blue-400'
                  }`}
                >
                  <Star className="h-full w-full fill-current" />
                </button>
              ))}
              <span className="ml-4 text-sm text-blue-200 font-medium">
                {formData.rating > 0 && (
                  <span>
                    {formData.rating} out of 5 star{formData.rating !== 1 ? 's' : ''}
                  </span>
                )}
              </span>
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-blue-200 mb-2">
              Feedback Category *
            </label>
            <select
              name="category"
              required
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-blue-800 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-blue-900 text-white transition-colors"
            >
              <option value="general">General Feedback</option>
              <option value="booking">Booking Experience</option>
              <option value="website">Website/App Issues</option>
              <option value="cinema">Cinema Experience</option>
              <option value="customer-service">Customer Service</option>
              <option value="payment">Payment Issues</option>
              <option value="suggestion">Suggestions</option>
              <option value="complaint">Complaint</option>
            </select>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-blue-200 mb-2">
              Subject *
            </label>
            <input
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-blue-800 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-blue-900 text-white placeholder-blue-300 transition-colors"
              placeholder="Brief subject of your feedback"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-blue-200 mb-2">
              Your Message *
            </label>
            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-blue-800 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-vertical bg-blue-900 text-white placeholder-blue-300 transition-colors"
              placeholder="Please share your detailed feedback, suggestions, or concerns..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-blue-800 text-blue-200 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || formData.rating === 0}
              className="px-8 py-3 bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-lg hover:from-blue-900 hover:to-blue-950 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Submit Feedback</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Footer Note */}
        <div className="bg-blue-800 px-6 py-4 border-t border-blue-700 rounded-b-lg">
          <p className="text-xs text-blue-200">
            Your feedback is important to us. We typically respond within 24-48 hours.
            For urgent issues, please call our customer care at 1800-123-4567.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
