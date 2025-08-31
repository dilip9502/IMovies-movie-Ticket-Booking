import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Calendar, Clock, Star, Filter, ChevronRight, Play, Heart, Share2 } from 'lucide-react';
import MovieCarousel from '../components/MovieCarousel';

// ongoingMovies and upcomingMovies remain unchanged (per your request)
const ongoingMovies = [
  {
    id: 1,
    title: 'Oh Bhama Ayyo Rama',
    genre: 'Comedy, Drama',
    language: 'Telugu',
    rating: 4.2,
    releaseDate: 'July 11, 2024',
    poster: 'https://assetscdn1.paytm.com/images/cinema/P%20Oh-Bhama-ayyo-Rama%20(1)-f4b18f80-5b1a-11f0-b109-2d6716fa40ab.jpg',
    duration: '2h 25m',
    description: 'A hilarious comedy-drama about family relationships and misunderstandings.',
    cast: ['Srikanth', 'Srithej', 'Vennela Kishore'],
    director: 'Srikanth Vissa'
  },
  {
    id: 2,
    title: 'The 100',
    genre: 'Action, Thriller',
    language: 'English',
    rating: 3.8,
    releaseDate: 'July 11, 2024',
    poster: 'https://i.pinimg.com/736x/e0/2c/62/e02c62ab4762add6553d43d72d646928.jpg',
    duration: '2h 15m',
    description: 'An intense action thriller that keeps you on the edge of your seat.',
    cast: ['Atharvaa', 'Hansika Motwani'],
    director: 'Sam Anton'
  },
  {
    id: 3,
    title: 'Virgin Boys',
    genre: 'Comedy, Romance',
    language: 'Telugu',
    rating: 3.5,
    releaseDate: 'July 11, 2024',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlrQVSFDkIDem3I7wk44QQ7sftFrp8ljifcw&s',
    duration: '2h 10m',
    description: 'A coming-of-age romantic comedy about friendship and love.',
    cast: ['Aadarsh Balakrishna', 'Divya Pillai'],
    director: 'Rajesh Touchriver'
  },
  {
    id: 4,
    title: 'Dheerga Ayushman Bhava',
    genre: 'Drama, Family',
    language: 'Telugu',
    rating: 4.0,
    releaseDate: 'July 11, 2024',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVuDs-GBpn-B-opwyqbC5Nvu4FOF7ILbhJRg&s',
    duration: '2h 30m',
    description: 'A heartwarming family drama about love, sacrifice, and relationships.',
    cast: ['Arjun Das', 'Ritu Varma'],
    director: 'Karthik Subbaraj'
  },
  {
    id: 5,
    title: 'Mrithyunjay',
    genre: 'Action, Drama',
    language: 'Telugu',
    rating: 4.1,
    releaseDate: 'July 14, 2024',
    poster: 'https://images.filmibeat.com/img/220x275/popcorn/movie_posters/mrithyunjay-20250302095713-23566.jpg',
    duration: '2h 35m',
    description: 'An epic action drama based on ancient mythology and heroism.',
    cast: ['Vijay Deverakonda', 'Rashmika Mandanna'],
    director: 'Parasuram'
  },
  {
    id: 6,
    title: 'Sharwa 36',
    genre: 'Action, Comedy',
    language: 'Telugu',
    rating: 3.9,
    releaseDate: 'July 10, 2024',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlF4touaQ_zUGSWG2s5JJ1Tfimp1a7q5PYnQ&s',
    duration: '2h 20m',
    description: 'An action-comedy entertainer with perfect blend of humor and thrills.',
    cast: ['Sharwanand', 'Krithi Shetty'],
    director: 'Kishore Tirumala'
  },
  {
    id: 7,
    title: 'Ghaati',
    genre: 'Thriller, Mystery',
    language: 'Hindi',
    rating: 4.3,
    releaseDate: 'July 11, 2024',
    poster: 'https://m.media-amazon.com/images/M/MV5BZmZlYjY5NDctMDk5NS00MDY0LWE5MzUtMzViZWNhYjI4NjI1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    duration: '2h 18m',
    description: 'A gripping psychological thriller that will keep you guessing till the end.',
    cast: ['Anushka Shetty', 'Madhavan'],
    director: 'Krish Jagarlamudi'
  }
];

const upcomingMovies = [
  {
    id: 8,
    title: 'Meghalu Cheppina Prema Katha',
    genre: 'Romance, Drama',
    language: 'Telugu',
    rating: 0,
    releaseDate: 'July 24, 2024',
    poster: 'https://m.media-amazon.com/images/M/MV5BNmNhOTcwMzEtMTkwYS00OTYyLTg3OTYtNGFjMjc4MGIyMTQxXkEyXkFqcGc@._V1_QL75_UY281_CR18,0,190,281.jpg',
    duration: '2h 22m',
    description: 'A romantic drama that explores the depths of love and relationships.',
    cast: ['Nithiin', 'Keerthy Suresh'],
    director: 'Trivikram Srinivas'
  },
  {
    id: 9,
    title: 'Hari Hara Veera Mallu',
    genre: 'Historical, Action',
    language: 'Telugu',
    rating: 0,
    releaseDate: 'July 24, 2024',
    poster: 'https://i.pinimg.com/736x/d1/87/64/d187647bd01114011c641e9a4c05fdc1.jpg',
    duration: '2h 45m',
    description: 'A historical action epic about the legendary warrior Veera Mallu.',
    cast: ['Pawan Kalyan', 'Nidhhi Agerwal'],
    director: 'Krish Jagarlamudi'
  },
  {
    id: 10,
    title: 'Mahavatar Narsimha',
    genre: 'Mythology, Action',
    language: 'Telugu,Hindi',
    rating: 0,
    releaseDate: 'July 25, 2024',
    poster: 'https://assetscdn1.paytm.com/images/cinema/3_Mahavatar-Narsimha_Poster-810b5220-580c-11f0-8c69-e1cfd333c047.jpg',
    duration: '2h 50m',
    description: 'A mythological action film depicting the avatar of Lord Narsimha.',
    cast: ['Hrithik Roshan', 'Deepika Padukone'],
    director: 'Nitesh Tiwari'
  },
  {
    id: 11,
    title: 'Selfish',
    genre: 'Thriller, Drama',
    language: 'Telugu',
    rating: 0,
    releaseDate: 'July 27, 2024',
    poster: 'https://images.filmibeat.com/img/popcorn/movie_posters/selfish-20230323151223-21674.jpg',
    duration: '2h 12m',
    description: 'A psychological thriller exploring human nature and moral dilemmas.',
    cast: ['Adivi Sesh', 'Saiee Manjrekar'],
    director: 'Sashi Kiran Tikka'
  },
  {
    id: 12,
    title: 'Paradha',
    genre: 'Action, Romance',
    language: 'Telugu',
    rating: 0,
    releaseDate: 'July 28, 2024',
    poster: 'https://m.media-amazon.com/images/M/MV5BN2U5YjVlYTUtMzA5Yy00OGQ3LWEwODEtNTdjYTcxNDQ2ZDdlXkEyXkFqcGc@._V1_QL75_UY281_CR18,0,190,281.jpg',
    duration: '2h 28m',
    description: 'An action-packed romantic entertainer with spectacular visuals.',
    cast: ['Ram Charan', 'Kiara Advani'],
    director: 'Boyapati Srinu'
  },
  {
    id: 13,
    title: 'Kingdom',
    genre: 'Fantasy, Adventure',
    language: 'Telugu',
    rating: 0,
    releaseDate: 'July 31, 2024',
    poster: 'https://i.pinimg.com/736x/26/27/a0/2627a08390ddf2d86d27928482784325.jpg',
    duration: '2h 40m',
    description: 'A fantasy adventure set in an ancient kingdom with magical elements.',
    cast: ['Mahesh Babu', 'Pooja Hegde'],
    director: 'Anil Ravipudi'
  }
];

const Home = ({ selectedLocation }) => {
  const [searchParams] = useSearchParams();
  const [filteredOngoing, setFilteredOngoing] = useState(ongoingMovies);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    filterMovies();
  }, [searchQuery, selectedGenre, selectedLanguage]);

  const filterMovies = () => {
    let ongoing = ongoingMovies;

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      ongoing = ongoing.filter(
        (movie) =>
          movie.title.toLowerCase().includes(query) ||
          movie.genre.toLowerCase().includes(query) ||
          movie.cast.some((actor) => actor.toLowerCase().includes(query))
      );
    }

    // Genre filter
    if (selectedGenre !== 'All') {
      ongoing = ongoing.filter((movie) => movie.genre.includes(selectedGenre));
    }

    // Language filter
    if (selectedLanguage !== 'All') {
      ongoing = ongoing.filter((movie) => movie.language === selectedLanguage);
    }

    setFilteredOngoing(ongoing);
  };

  const genres = [
    'All',
    'Action',
    'Comedy',
    'Drama',
    'Romance',
    'Thriller',
    'Historical',
    'Mythology',
    'Fantasy',
  ];
  const languages = ['All', 'Telugu', 'Hindi', 'English'];

  return (
    <div className="min-h-screen bg-blue-950 text-blue-100">
      <MovieCarousel movies={ongoingMovies.slice(0, 6)} />
      {/* Filters */}
      <div className="bg-blue-900 shadow-lg border-b border-blue-800 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-blue-400" />
              <span className="font-medium text-blue-100">Filters:</span>
            </div>

            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="px-4 py-2 border border-blue-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-950 text-blue-100 shadow-sm hover:shadow-md transition-shadow"
            >
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>

            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="px-4 py-2 border border-blue-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-950 text-blue-100 shadow-sm hover:shadow-md transition-shadow"
            >
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>

            {(searchQuery || selectedGenre !== 'All' || selectedLanguage !== 'All') && (
              <button
                onClick={() => {
                  setSelectedGenre('All');
                  setSelectedLanguage('All');
                  window.history.pushState({}, '', '/');
                }}
                className="px-4 py-2 text-sm text-blue-400 font-medium bg-blue-800 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Now Showing */}
        <section id="now-showing" className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-blue-100 relative">
              Now Showing
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            </h2>
            <div className="flex items-center space-x-2 text-blue-400 cursor-pointer">
              <span className="text-sm font-medium">View All</span>
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>

          {filteredOngoing.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {filteredOngoing.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-blue-900 rounded-xl shadow-sm">
              <p className="text-blue-400 text-lg">No movies found matching your criteria.</p>
            </div>
          )}
        </section>

        {/* Content removed as requested */}
      </div>
    </div>
  );
};

const MovieCard = ({ movie, isUpcoming = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-blue-900 rounded-xl shadow-lg overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 transform">
        <div className="relative">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay on hover */}
          <div
            className={`absolute inset-0 bg-blue-950 bg-opacity-80 flex items-center justify-center transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex space-x-4">
              <Link
                to={`/movie/${movie.id}`}
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors"
              >
                <Play className="h-5 w-5" />
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsLiked(!isLiked);
                }}
                className={`p-3 rounded-full transition-colors ${
                  isLiked ? 'bg-blue-600 text-white' : 'bg-blue-200 text-blue-700 hover:bg-blue-300'
                }`}
              >
                <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
              <button className="bg-blue-200 text-blue-700 hover:bg-blue-300 p-3 rounded-full transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>

          {movie.rating > 0 && (
            <div className="absolute top-3 right-3 bg-blue-950 bg-opacity-80 text-yellow-400 px-3 py-1 rounded-full flex items-center space-x-1 backdrop-blur-sm">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-semibold">{movie.rating}</span>
            </div>
          )}
          {isUpcoming && (
            <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full">
              <span className="text-xs font-semibold">Coming Soon</span>
            </div>
          )}
        </div>

        <div className="p-5">
          <Link to={`/movie/${movie.id}`}>
            <h3 className="font-bold text-lg mb-2 text-blue-100 group-hover:text-blue-400 transition-colors line-clamp-2">
              {movie.title}
            </h3>
          </Link>
          <div className="space-y-2 text-sm text-blue-300 mb-4">
            <p className="font-medium text-blue-500">{movie.genre}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <Calendar className="h-3 w-3" />
                <span>{movie.releaseDate}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{movie.duration}</span>
              </div>
            </div>
          </div>
          {!isUpcoming ? (
            <Link
              to={`/movie/${movie.id}`}
              className="block w-full bg-gradient-to-r from-blue-700 to-blue-800 text-white py-3 rounded-lg font-semibold hover:from-blue-800 hover:to-blue-900 transition-all duration-300 text-center transform hover:scale-105"
            >
              Book Now
            </Link>
          ) : (
            <button className="w-full bg-blue-800 text-blue-300 py-3 rounded-lg font-semibold cursor-not-allowed">
              Coming Soon
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
