import React, { useState, useEffect, useRef } from 'react';
import { Play, Heart, Share2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const MovieCarousel = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = movies.length;
  const timeoutRef = useRef(null);

  useEffect(() => {
    const next = (currentIndex + 1) % length;
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex(next);
    }, 3000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, length]);

  if (!Array.isArray(movies) || movies.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className="min-w-full relative"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold">{movie.title}</h3>
              <p className="text-sm">{movie.genre} | {movie.language}</p>
              <div className="flex items-center space-x-2 mt-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>{movie.rating}</span>
              </div>
              <div className="mt-4 flex space-x-4">
                <Link
                  to={`/movie/${movie.id}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center space-x-2"
                >
                  <Play className="h-5 w-5" />
                  <span>Watch</span>
                </Link>
                <button className="bg-blue-500 bg-opacity-70 hover:bg-opacity-100 px-3 py-2 rounded-md flex items-center">
                  <Heart className="h-5 w-5" />
                </button>
                <button className="bg-blue-500 bg-opacity-70 hover:bg-opacity-100 px-3 py-2 rounded-md flex items-center">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {movies.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === currentIndex ? 'bg-blue-600' : 'bg-blue-300'}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieCarousel;
