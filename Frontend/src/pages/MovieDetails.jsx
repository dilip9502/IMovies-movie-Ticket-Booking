import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Calendar, Clock, Users, Play, Heart, Share2, X } from 'lucide-react';

// Trailer Modal Component
const TrailerModal = ({ isOpen, onClose, trailerUrl, movieTitle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">{movieTitle} - Official Trailer</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={trailerUrl}
            title={`${movieTitle} Trailer`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

// Mock movie data
const movieData = {
  1: {
    id: 1,
    title: 'Oh Bhama Ayyo Rama',
    genre: 'Comedy, Drama',
    language: 'Telugu',
    rating: 4.2,
    releaseDate: 'July 11, 2024',
    poster: 'https://assetscdn1.paytm.com/images/cinema/P%20Oh-Bhama-ayyo-Rama%20(1)-f4b18f80-5b1a-11f0-b109-2d6716fa40ab.jpg',
    banner: 'https://i.pinimg.com/736x/7f/75/0c/7f750cb71813899c44da6caa3f18637e.jpg',
    duration: '2h 25m',
    description: 'A hilarious comedy-drama about family relationships and misunderstandings.',
    cast: [
      {
        name: 'Srikanth',
        role: 'Lead Actor',
        photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      {
        name: 'Srithej',
        role: 'Supporting Actor',
        photo: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      {
        name: 'Vennela Kishore',
        role: 'Comedian',
        photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      {
        name: 'Prudhvi Raj',
        role: 'Character Actor',
        photo: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150'
      }
    ],
    director: 'Srikanth Vissa',
    producer: 'Suresh Productions',
    music: 'Devi Sri Prasad',
    certification: 'U/A',
    trailerUrl: 'https://www.youtube.com/embed/QA78jI_Xtkk',
    reviews: [
      { user: 'MovieLover123', rating: 4, comment: 'Great comedy timing and excellent performances!' },
      { user: 'FilmCritic', rating: 4.5, comment: 'A perfect family entertainer with heart and humor.' }
    ]
  },
  2: {
    id: 2,
    title: 'The 100',
    genre: 'Action, Thriller',
    language: 'Telugu',
    rating: 3.8,
    releaseDate: 'July 11, 2024',
    poster: 'https://i.pinimg.com/736x/e0/2c/62/e02c62ab4762add6553d43d72d646928.jpg',
    banner: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhb7JJxzLuI5v29XyFNS-FUp8_L1NlRSlU0NlKeFJO7MnZUzSl3ZlfQYOlvooNKF6UyqcyVU6ilnlPVwttihMQhGM2pMIip0CjawBk5lOWlSfUKOXxf3eh7QqX6ZpacaU5T9BMH_reJXko8/w1200-h630-p-k-no-nu/the+100.jpg',
    duration: '2h 15m',
    description: 'An intense action thriller that keeps you on the edge of your seat.',
    cast: [
      {
        name: 'Atharvaa',
        role: 'Lead Actor',
        photo: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      {
        name: 'Hansika Motwani',
        role: 'Lead Actress',
        photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      {
        name: 'Yogi Babu',
        role: 'Comedian',
        photo: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=150'
      }
    ],
    director: 'Sam Anton',
    producer: 'Rockfort Entertainment',
    music: 'Sam CS',
    certification: 'A',
    trailerUrl: 'https://www.youtube.com/embed/aDrsItJ_HU4',
    reviews: [
      { user: 'ActionFan', rating: 4, comment: 'Non-stop action and great cinematography!' },
      { user: 'ThrillerLover', rating: 3.5, comment: 'Good thriller elements but could be better.' }
    ]
  },
  3: {
    id: 3,
    title: 'Virgin Boys',
    genre: 'Comedy, Romance',
    language: 'Telugu',
    rating: 3.5,
    releaseDate: 'July 11, 2024',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlrQVSFDkIDem3I7wk44QQ7sftFrp8ljifcw&s',
    banner: 'https://images.pexels.com/photos/4792096/pexels-photo-4792096.jpeg?auto=compress&cs=tinysrgb&w=600', // Placeholder, update as needed
    duration: '2h 10m',
    description: 'A coming-of-age romantic comedy about friendship and love.',
    cast: [
      {
        name: 'Aadarsh Balakrishna',
        role: 'Lead Actor',
        photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      {
        name: 'Divya Pillai',
        role: 'Lead Actress',
        photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
      }
    ],
    director: 'Rajesh Touchriver',
    producer: 'Rajguru Films',
    music: 'Smaran',
    certification: 'U/A',
    trailerUrl: 'https://www.youtube.com/embed/gwVUU9UWGw0',
    reviews: [
      { user: 'YouthCritic', rating: 3.5, comment: 'Fun, lighthearted college comedy with good moments.' }
    ]
  },
  4: {
    id: 4,
    title: 'Dheerga Ayushman Bhava',
    genre: 'Drama, Family',
    language: 'Telugu',
    rating: 4.0,
    releaseDate: 'July 11, 2024',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVuDs-GBpn-B-opwyqbC5Nvu4FOF7ILbhJRg&s',
    banner: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600', // Placeholder, update as needed
    duration: '2h 30m',
    description: 'A heartwarming family drama about love, sacrifice, and relationships.',
    cast: [
      {
        name: 'Arjun Das',
        role: 'Lead Actor',
        photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      {
        name: 'Ritu Varma',
        role: 'Lead Actress',
        photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
      }
    ],
    director: 'Karthik Subbaraj',
    producer: 'Suresh Productions',
    music: 'Vivek Sagar',
    certification: 'U',
    trailerUrl: 'https://www.youtube.com/embed/aDrsItJ_HU4', // Add if available
    reviews: [
      { user: 'FamilyFan', rating: 4, comment: 'Emotional drama with strong performances.' }
    ]
  },
  5: {
    id: 5,
    title: 'Mrithyunjay',
    genre: 'Action, Drama',
    language: 'Telugu',
    rating: 4.1,
    releaseDate: 'July 14, 2024',
    poster: 'https://images.filmibeat.com/img/220x275/popcorn/movie_posters/mrithyunjay-20250302095713-23566.jpg',
    banner: 'https://res.cloudinary.com/demo/image/upload/w_600,h_300,c_fill/mrithyunjay_banner.jpg', // Placeholder, update as needed
    duration: '2h 35m',
    description: 'An epic action drama based on ancient mythology and heroism.',
    cast: [
      {
        name: 'Vijay Deverakonda',
        role: 'Lead Actor',
        photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      {
        name: 'Rashmika Mandanna',
        role: 'Lead Actress',
        photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
      }
    ],
    director: 'Parasuram',
    producer: 'Light Box Media, Picture Perfect Entertainment',
    music: 'Kaala Bhairava',
    certification: 'A',
    trailerUrl: 'https://www.youtube.com/embed/8jwh08fCOOM',
    reviews: [
      { user: 'ActionEnthusiast', rating: 4.1, comment: 'Powerful story with mythological elements and strong action.' }
    ]
  },
  6: {
    id: 6,
    title: 'Sharwa 36',
    genre: 'Action, Comedy',
    language: 'Telugu',
    rating: 3.9,
    releaseDate: 'July 10, 2024',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlF4touaQ_zUGSWG2s5JJ1Tfimp1a7q5PYnQ&s',
    banner: 'https://images.pexels.com/photos/1626221/pexels-photo-1626221.jpeg?auto=compress&cs=tinysrgb&w=600', // Placeholder, update as needed
    duration: '2h 20m',
    description: 'An action-comedy entertainer with perfect blend of humor and thrills.',
    cast: [
      {
        name: 'Sharwanand',
        role: 'Lead Actor',
        photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      {
        name: 'Krithi Shetty',
        role: 'Lead Actress',
        photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
      }
    ],
    director: 'Kishore Tirumala',
    producer: '', // Add if available
    music: '', // Add if available
    certification: 'U/A',
    trailerUrl: 'https://www.youtube.com/embed/aDrsItJ_HU4', // Add if available
    reviews: [
      { user: 'ComedyFan', rating: 4, comment: 'High-energy action with lots of laughs!' }
    ]
  },
  7: {
    id: 7,
    title: 'Ghaati',
    genre: 'Thriller, Mystery',
    language: 'Hindi',
    rating: 4.3,
    releaseDate: 'July 11, 2024',
    poster: 'https://m.media-amazon.com/images/M/MV5BZmZlYjY5NDctMDk5NS00MDY0LWE5MzUtMzViZWNhYjI4NjI1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    banner: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600', // Placeholder, update as needed
    duration: '2h 18m',
    description: 'A gripping psychological thriller that will keep you guessing till the end.',
    cast: [
      {
        name: 'Anushka Shetty',
        role: 'Lead Actress',
        photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      {
        name: 'Madhavan',
        role: 'Lead Actor',
        photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150'
      }
    ],
    director: 'Krish Jagarlamudi',
    producer: '',
    music: '',
    certification: 'A',
    trailerUrl: 'https://www.youtube.com/embed/aDrsItJ_HU4', // Add if available
    reviews: [
      { user: 'ThrillerBuff', rating: 4.3, comment: 'Excellent psychological twists—kept me hooked!' }
    ]
  }
};

const MovieDetails = ({ selectedLocation, user }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about');
  const [userRating, setUserRating] = useState(0);
  const [userReview, setUserReview] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);

  const movie = movieData[id] || movieData[1];

  const handleRatingSubmit = () => {
    if (userRating > 0 && userReview.trim()) {
      alert('Review submitted successfully!');
      setUserRating(0);
      setUserReview('');
    }
  };

  const handleBookNow = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    navigate(`/cinemas/${movie.id}`);
  };

  const handleWatchTrailer = () => {
    setShowTrailer(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Movie Banner - Dark Blue Background */}
      <div className="relative h-96 md:h-[500px] overflow-hidden bg-blue-900">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-800/50 to-blue-700" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-6">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-48 md:w-60 rounded-lg shadow-2xl"
              />
              
              <div className="text-white flex-1">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{movie.title}</h1>
                
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center space-x-2 bg-black bg-opacity-50 px-3 py-1 rounded-lg">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{movie.rating}/5</span>
                  </div>
                  <span className="bg-red-600 px-3 py-1 rounded-lg font-semibold">
                    {movie.certification}
                  </span>
                  <span className="bg-gray-800 px-3 py-1 rounded-lg">
                    {movie.language}
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-6 text-sm mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{movie.releaseDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{movie.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>{movie.genre}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={handleBookNow}
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    {user ? 'Book Tickets' : 'Login to Book'}
                  </button>
                  
                  <button 
                    onClick={handleWatchTrailer}
                    className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <Play className="h-5 w-5" />
                    <span>Watch Trailer</span>
                  </button>
                  
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`p-3 rounded-lg transition-colors ${
                      isLiked ? 'bg-red-600 text-white' : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                  </button>
                  
                  <button className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-lg transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'about', label: 'About' },
                { id: 'cast', label: 'Cast & Crew' },
                { id: 'reviews', label: 'Reviews' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-red-600 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'about' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Synopsis</h3>
                  <p className="text-gray-700 leading-relaxed">{movie.description}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Movie Details</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p><span className="font-medium">Director:</span> {movie.director}</p>
                      <p><span className="font-medium">Producer:</span> {movie.producer}</p>
                      <p><span className="font-medium">Music:</span> {movie.music}</p>
                      <p><span className="font-medium">Duration:</span> {movie.duration}</p>
                      <p><span className="font-medium">Genre:</span> {movie.genre}</p>
                      <p><span className="font-medium">Language:</span> {movie.language}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'cast' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Cast</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {movie.cast.map((actor, index) => (
                      <div key={index} className="text-center">
                        <img
                          src={actor.photo}
                          alt={actor.name}
                          className="w-24 h-24 rounded-full mx-auto mb-3 object-cover shadow-lg"
                        />
                        <p className="font-medium text-sm">{actor.name}</p>
                        <p className="text-xs text-gray-500">{actor.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Crew</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">Director</p>
                      <p className="text-gray-600">{movie.director}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">Music Director</p>
                      <p className="text-gray-600">{movie.music}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">User Reviews</h3>
                  <div className="space-y-4">
                    {movie.reviews.map((review, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold">{review.user}</span>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{review.rating}/5</span>
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Trailer Modal */}
      <TrailerModal
        isOpen={showTrailer}
        onClose={() => setShowTrailer(false)}
        trailerUrl={movie.trailerUrl}
        movieTitle={movie.title}
      />
    </div>
  );
};

export default MovieDetails;
