import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Eye, Film, MapPin, Users, BarChart3 } from 'lucide-react';
import movieService from '../services/movieService';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editingMovie, setEditingMovie] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    genre: '',
    language: '',
    duration: '',
    releaseDate: '',
    rating: 0,
    certification: 'UA',
    poster: '',
    banner: '',
    trailerUrl: '',
    cast: '',
    director: '',
    producer: '',
    music: '',
    status: 'upcoming',
  });

  const stats = {
    totalMovies: movies.length,
    totalBookings: 1247,
    totalRevenue: 2456780,
    activeUsers: 8934,
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await movieService.getAllMovies();
      setMovies(data.data.movies);
    } catch (err) {
      setError(err.message || 'Failed to fetch movies');
    } finally {
      setLoading(false);
    }
  };

  const openAddModal = () => {
    setEditingMovie(null);
    setFormData({
      title: '',
      description: '',
      genre: '',
      language: '',
      duration: '',
      releaseDate: '',
      rating: 0,
      certification: 'UA',
      poster: '',
      banner: '',
      trailerUrl: '',
      cast: '',
      director: '',
      producer: '',
      music: '',
      status: 'upcoming',
    });
    setShowModal(true);
  };

  const openEditModal = (movie) => {
    setEditingMovie(movie);
    setFormData({
      title: movie.title,
      description: movie.description,
      genre: movie.genre.join(', '),
      language: movie.language.join(', '),
      duration: movie.duration,
      releaseDate: movie.releaseDate.split('T')[0],
      rating: movie.rating,
      certification: movie.certification,
      poster: movie.poster,
      banner: movie.banner,
      trailerUrl: movie.trailerUrl,
      cast: movie.cast.map(c => `${c.name}:${c.role}`).join(', '),
      director: movie.director,
      producer: movie.producer,
      music: movie.music,
      status: movie.status,
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingMovie(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const moviePayload = {
      ...formData,
      genre: formData.genre.split(',').map(g => g.trim()),
      language: formData.language.split(',').map(l => l.trim()),
      cast: formData.cast.split(',').map(c => {
        const [name, role] = c.split(':').map(s => s.trim());
        return { name, role };
      }),
      releaseDate: new Date(formData.releaseDate),
      rating: Number(formData.rating),
    };

    try {
      if (editingMovie) {
        await movieService.updateMovie(editingMovie._id, moviePayload);
      } else {
        await movieService.createMovie(moviePayload);
      }
      closeModal();
      fetchMovies();
    } catch (err) {
      alert(err.message || 'Failed to save movie');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this movie?')) return;
    try {
      await movieService.deleteMovie(id);
      fetchMovies();
    } catch (err) {
      alert(err.message || 'Failed to delete movie');
    }
  };

  return (
    <div className="min-h-screen bg-blue-950 text-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-blue-300">Manage movies, theaters, and bookings</p>
        </div>

        {/* Tabs */}
        <div className="border-b border-blue-800 mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'movies', label: 'Movies', icon: Film },
              { id: 'theaters', label: 'Theaters', icon: MapPin },
              { id: 'users', label: 'Users', icon: Users }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-blue-400 hover:text-blue-500'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-blue-900 rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Film className="h-8 w-8 text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-blue-300">Total Movies</p>
                    <p className="text-2xl font-semibold text-white">{stats.totalMovies}</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900 rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Users className="h-8 w-8 text-green-500" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-blue-300">Total Bookings</p>
                    <p className="text-2xl font-semibold text-white">{stats.totalBookings}</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900 rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <BarChart3 className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-blue-300">Total Revenue</p>
                    <p className="text-2xl font-semibold text-white">₹{stats.totalRevenue.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900 rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Users className="h-8 w-8 text-blue-500" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-blue-300">Active Users</p>
                    <p className="text-2xl font-semibold text-white">{stats.activeUsers}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-blue-900 rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-blue-800">
                <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-blue-300 text-sm">New movie "Paradha" added to the system</span>
                  <span className="text-xs text-blue-500">2 hours ago</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-300 text-sm">125 tickets booked for "Oh Bhama Ayyo Rama"</span>
                  <span className="text-xs text-blue-500">4 hours ago</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-blue-300 text-sm">New theater "PVR Guntur" added</span>
                  <span className="text-xs text-blue-500">1 day ago</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'movies' && (
          <div className="space-y-6">
            {/* Header Actions */}
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-white">Movie Management</h2>
              <button onClick={openAddModal} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>Add Movie</span>
              </button>
            </div>

            {loading && <p>Loading movies...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {/* Movies Table */}
            <div className="bg-blue-900 rounded-lg shadow-sm overflow-hidden">
              <table className="min-w-full divide-y divide-blue-800">
                <thead className="bg-blue-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-400 uppercase tracking-wider">
                      Movie
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-400 uppercase tracking-wider">
                      Genre
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-400 uppercase tracking-wider">
                      Language
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-400 uppercase tracking-wider">
                      Rating
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-blue-900 divide-y divide-blue-800">
                  {movies.map((movie) => (
                    <tr key={movie._id} className="hover:bg-blue-800">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-blue-100">{movie.title}</div>
                          <div className="text-sm text-blue-300">{movie.duration}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-100">
                        {movie.genre.join(', ')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-100">
                        {movie.language.join(', ')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-100">
                        {movie.rating}/5
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          movie.status === 'now_showing' 
                            ? 'bg-green-600 text-green-100'
                            : movie.status === 'upcoming'
                            ? 'bg-yellow-600 text-yellow-100'
                            : 'bg-red-600 text-red-100'
                        }`}>
                          {movie.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-100">
                        <div className="flex space-x-2">
                          <button onClick={() => alert('View not implemented')} className="text-blue-400 hover:text-blue-600">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button onClick={() => openEditModal(movie)} className="text-green-400 hover:text-green-600">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button onClick={() => handleDelete(movie._id)} className="text-red-400 hover:text-red-600">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'theaters' && (
          <div className="bg-blue-900 rounded-lg shadow-sm p-6 text-blue-100">
            <h2 className="text-2xl font-semibold mb-4 text-white">Theater Management</h2>
            <p>Theater management functionality would be implemented here.</p>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="bg-blue-900 rounded-lg shadow-sm p-6 text-blue-100">
            <h2 className="text-2xl font-semibold mb-4 text-white">User Management</h2>
            <p>User management functionality would be implemented here.</p>
          </div>
        )}

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-blue-900 rounded-lg shadow-lg p-6 w-full max-w-3xl max-h-full overflow-auto">
              <h2 className="text-xl font-semibold mb-4 text-white">{editingMovie ? 'Edit Movie' : 'Add Movie'}</h2>
              <form onSubmit={handleSubmit} className="space-y-4 text-blue-100">
                <div>
                  <label className="block mb-1">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded border border-blue-700 bg-blue-800 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded border border-blue-700 bg-blue-800 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1">Genre (comma separated)</label>
                  <input
                    type="text"
                    name="genre"
                    value={formData.genre}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded border border-blue-700 bg-blue-800 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1">Language (comma separated)</label>
                  <input
                    type="text"
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded border border-blue-700 bg-blue-800 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1">Duration</label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded border border-blue-700 bg-blue-800 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1">Release Date</label>
                  <input
                    type="date"
                    name="releaseDate"
                    value={formData.releaseDate}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded border border-blue-700 bg-blue-800 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1">Rating</label>
                  <input
                    type="number"
                    name="rating"
                    min="0"
                    max="5"
                    step="0.1"
                    value={formData.rating}
                    onChange={handleInputChange}
                    className="w-full rounded border border-blue-700 bg-blue-800 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1">Certification</label>
                  <select
                    name="certification"
                    value={formData.certification}
                    onChange={handleInputChange}
                    className="w-full rounded border border-blue-700 bg-blue-800 px-3 py-2"
                  >
                    <option value="U">U</option>
                    <option value="UA">UA</option>
                    <option value="A">A</option>
                    <option value="S">S</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1">Poster URL</label>
                  <input
                    type="text"
                    name="poster"
                    value={formData.poster}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded border border-blue-700 bg-blue-800 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1">Banner URL</label>
                  <input
                    type="text"
                    name="banner"
                    value={formData.banner}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded border border-blue-700 bg-blue-800 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1">Trailer URL</label>
                  <input
                    type="text"
                    name="trailerUrl"
                    value={formData.trailerUrl}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded border border-blue-700 bg-blue-800 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1">Cast (format: name:role, comma separated)</label>
                  <input
                    type="text"
                    name="cast"
                    value={formData.cast}
                    onChange={handleInputChange}
                    className="w-full rounded border border-blue-700 bg-blue-800 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1">Director</label>
                  <input
                    type="text"
                    name="director"
                    value={formData.director}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded border border-blue-700 bg-blue-800 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1">Producer</label>
                  <input
                    type="text"
                    name="producer"
                    value={formData.producer}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded border border-blue-700 bg-blue-800 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1">Music Director</label>
                  <input
                    type="text"
                    name="music"
                    value={formData.music}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded border border-blue-700 bg-blue-800 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full rounded border border-blue-700 bg-blue-800 px-3 py-2"
                  >
                    <option value="upcoming">Upcoming</option>
                    <option value="now_showing">Now Showing</option>
                    <option value="ended">Ended</option>
                  </select>
                </div>
                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700"
                  >
                    {editingMovie ? 'Update' : 'Add'} Movie
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
