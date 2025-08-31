import React, { useState } from 'react';
import { MapPin, Star, Wifi, Car, Utensils } from 'lucide-react';

const Theaters = ({ selectedLocation }) => {
  const [selectedCity, setSelectedCity] = useState(selectedLocation);

  // Comprehensive theater data for all cities
  const theatersData = {
    'Visakhapatnam (Vizag)': [
      {
        id: 1,
        name: 'PVR Icon Cinemas',
        location: 'CMR Central Mall',
        address: 'CMR Central Mall, Maddilapalem, Visakhapatnam - 530013',
        amenities: ['Dolby Atmos', '4K Projection', 'Recliner Seats', 'Food Court', 'Parking'],
        screens: ['Screen 1 (IMAX)', 'Screen 2 (Premium)', 'Screen 3 (Regular)'],
        rating: 4.6,
        distance: '2.5 km',
        currentMovies: [
          { id: 1, title: 'Salaar', poster: '/api/placeholder/200/300', genre: 'Action', language: 'Telugu', rating: 4.5, showtimes: ['10:30', '14:00', '18:00', '21:30'] },
          { id: 2, title: 'Animal', poster: '/api/placeholder/200/300', genre: 'Action', language: 'Hindi', rating: 4.2, showtimes: ['11:00', '14:30', '18:30', '22:00'] }
        ]
      },
      {
        id: 2,
        name: 'INOX Varun Beach',
        location: 'Varun Inox Mall',
        address: 'Varun Inox Mall, Beach Road, Visakhapatnam - 530002',
        amenities: ['Dolby Atmos', '3D', 'Food Court', 'Parking', 'Wheelchair Access'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 4.4,
        distance: '3.2 km',
        currentMovies: [
          { id: 3, title: 'Dunki', poster: '/api/placeholder/200/300', genre: 'Comedy', language: 'Hindi', rating: 4.0, showtimes: ['10:00', '13:30', '17:00', '20:30'] },
          { id: 4, title: 'Hi Nanna', poster: '/api/placeholder/200/300', genre: 'Drama', language: 'Telugu', rating: 4.3, showtimes: ['11:30', '15:00', '18:30', '22:00'] }
        ]
      }
    ],
    'Vijayawada': [
      {
        id: 3,
        name: 'PVR PVP Square',
        location: 'PVP Square Mall',
        address: 'PVP Square Mall, MG Road, Vijayawada - 520010',
        amenities: ['Dolby Atmos', '4K Projection', 'Recliner Seats', 'Food Court', 'Parking'],
        screens: ['Screen 1 (IMAX)', 'Screen 2 (Premium)'],
        rating: 4.5,
        distance: '1.8 km',
        currentMovies: [
          { id: 5, title: 'Salaar', poster: '/api/placeholder/200/300', genre: 'Action', language: 'Telugu', rating: 4.5, showtimes: ['09:30', '13:00', '16:30', '20:00'] },
          { id: 6, title: 'Aquaman 2', poster: '/api/placeholder/200/300', genre: 'Action', language: 'English', rating: 4.1, showtimes: ['10:00', '13:30', '17:00', '20:30'] }
        ]
      },
      {
        id: 4,
        name: 'INOX Ripples Mall',
        location: 'Ripples Mall',
        address: 'Ripples Mall, Benz Circle, Vijayawada - 520010',
        amenities: ['Dolby Atmos', '3D', 'Food Court', 'Parking', 'Gaming Zone'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)', 'Screen 3 (Regular)'],
        rating: 4.3,
        distance: '2.5 km',
        currentMovies: [
          { id: 7, title: 'Wonka', poster: '/api/placeholder/200/300', genre: 'Fantasy', language: 'English', rating: 4.2, showtimes: ['11:00', '14:30', '18:00', '21:30'] },
          { id: 8, title: 'Extra Ordinary Man', poster: '/api/placeholder/200/300', genre: 'Comedy', language: 'Telugu', rating: 3.8, showtimes: ['10:30', '14:00', '17:30', '21:00'] }
        ]
      }
    ],
    'Guntur': [
      {
        id: 5,
        name: 'PVR Grand Mall',
        location: 'Grand Mall',
        address: 'Grand Mall, Brodipet, Guntur - 522002',
        amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 4.4,
        distance: '2.1 km',
        currentMovies: [
          { id: 9, title: 'Salaar', poster: '/api/placeholder/200/300', genre: 'Action', language: 'Telugu', rating: 4.5, showtimes: ['10:00', '13:30', '17:00', '20:30'] },
          { id: 10, title: 'Aquaman 2', poster: '/api/placeholder/200/300', genre: 'Action', language: 'English', rating: 4.1, showtimes: ['11:00', '14:30', '18:00', '21:30'] }
        ]
      },
      {
        id: 6,
        name: 'Cinepolis Guntur',
        location: 'City Center Mall',
        address: 'City Center Mall, Arundelpet, Guntur - 522002',
        amenities: ['Dolby Atmos', '3D', 'Recliner Seats', 'Food Court'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 4.2,
        distance: '2.8 km',
        currentMovies: [
          { id: 11, title: 'Dunki', poster: '/api/placeholder/200/300', genre: 'Comedy', language: 'Hindi', rating: 4.0, showtimes: ['10:30', '14:00', '17:30', '21:00'] },
          { id: 12, title: 'Hi Nanna', poster: '/api/placeholder/200/300', genre: 'Drama', language: 'Telugu', rating: 4.3, showtimes: ['11:00', '14:30', '18:00', '21:30'] }
        ]
      }
    ],
    'Nellore': [
      {
        id: 7,
        name: 'PVR Nellore Central',
        location: 'Nellore Central Mall',
        address: 'Nellore Central Mall, Trunk Road, Nellore - 524001',
        amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 4.3,
        distance: '1.5 km',
        currentMovies: [
          { id: 13, title: 'Salaar', poster: '/api/placeholder/200/300', genre: 'Action', language: 'Telugu', rating: 4.5, showtimes: ['10:00', '13:30', '17:00', '20:30'] },
          { id: 14, title: 'Animal', poster: '/api/placeholder/200/300', genre: 'Action', language: 'Hindi', rating: 4.2, showtimes: ['10:30', '14:00', '17:30', '21:00'] }
        ]
      },
      {
        id: 8,
        name: 'INOX MGB Felicity',
        location: 'MGB Felicity Mall',
        address: 'MGB Felicity Mall, Magunta Layout, Nellore - 524003',
        amenities: ['Dolby Atmos', '3D', 'Food Court', 'Parking'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 4.1,
        distance: '3.0 km',
        currentMovies: [
          { id: 15, title: 'Dunki', poster: '/api/placeholder/200/300', genre: 'Comedy', language: 'Hindi', rating: 4.0, showtimes: ['10:00', '13:30', '17:00', '20:30'] },
          { id: 16, title: 'Hi Nanna', poster: '/api/placeholder/200/300', genre: 'Drama', language: 'Telugu', rating: 4.3, showtimes: ['10:30', '14:00', '17:30', '21:00'] }
        ]
      }
    ],
    'Tirupati': [
      {
        id: 9,
        name: 'PVR Tirumala',
        location: 'Tirumala Mall',
        address: 'Tirumala Mall, Renigunta Road, Tirupati - 517501',
        amenities: ['Dolby Atmos', '4K Projection', 'Recliner Seats', 'Food Court'],
        screens: ['Screen 1 (IMAX)', 'Screen 2 (Premium)'],
        rating: 4.5,
        distance: '2.0 km',
        currentMovies: [
          { id: 17, title: 'Salaar', poster: '/api/placeholder/200/300', genre: 'Action', language: 'Telugu', rating: 4.5, showtimes: ['09:30', '13:00', '16:30', '20:00'] },
          { id: 18, title: 'Aquaman 2', poster: '/api/placeholder/200/300', genre: 'Action', language: 'English', rating: 4.1, showtimes: ['10:00', '13:30', '17:00', '20:30'] }
        ]
      },
      {
        id: 10,
        name: 'INOX Leela Mahal',
        location: 'Leela Mahal',
        address: 'Leela Mahal, AIR Bypass Road, Tirupati - 517501',
        amenities: ['Dolby Atmos', '3D', 'Food Court', 'Parking'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 4.2,
        distance: '2.8 km',
        currentMovies: [
          { id: 19, title: 'Wonka', poster: '/api/placeholder/200/300', genre: 'Fantasy', language: 'English', rating: 4.2, showtimes: ['11:00', '14:30', '18:00', '21:30'] },
          { id: 20, title: 'Extra Ordinary Man', poster: '/api/placeholder/200/300', genre: 'Comedy', language: 'Telugu', rating: 3.8, showtimes: ['10:30', '14:00', '17:30', '21:00'] }
        ]
      }
    ],
    'Kurnool': [
      {
        id: 11,
        name: 'PVR Kurnool Central',
        location: 'Kurnool Central Mall',
        address: 'Kurnool Central Mall, Budhwar Peth, Kurnool - 518001',
        amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 4.3,
        distance: '1.7 km',
        currentMovies: [
          { id: 21, title: 'Salaar', poster: '/api/placeholder/200/300', genre: 'Action', language: 'Telugu', rating: 4.5, showtimes: ['10:00', '13:30', '17:00', '20:30'] },
          { id: 22, title: 'Kurnool Express', poster: '/api/placeholder/200/300', genre: 'Drama', language: 'Telugu', rating: 4.2, showtimes: ['10:30', '14:00', '17:30', '21:00'] }
        ]
      },
      {
        id: 12,
        name: 'Cinepolis Kurnool',
        location: 'City Center',
        address: 'City Center, Nandyal Road, Kurnool - 518001',
        amenities: ['Dolby Atmos', '3D', 'Recliner Seats', 'Food Court'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 4.1,
        distance: '2.4 km',
        currentMovies: [
          { id: 23, title: 'Dunki', poster: '/api/placeholder/200/300', genre: 'Comedy', language: 'Hindi', rating: 4.0, showtimes: ['10:30', '14:00', '17:30', '21:00'] },
          { id: 24, title: 'Hi Nanna', poster: '/api/placeholder/200/300', genre: 'Drama', language: 'Telugu', rating: 4.3, showtimes: ['11:00', '14:30', '18:00', '21:30'] }
        ]
      }
    ],
    'Rajahmundry': [
      {
        id: 13,
        name: 'PVR River Bay',
        location: 'River Bay Mall',
        address: 'River Bay Mall, Danavaipeta, Rajahmundry - 533103',
        amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 4.4,
        distance: '2.2 km',
        currentMovies: [
          { id: 25, title: 'Salaar', poster: '/api/placeholder/200/300', genre: 'Action', language: 'Telugu', rating: 4.5, showtimes: ['10:00', '13:30', '17:00', '20:30'] },
          { id: 26, title: 'Rajahmundry Express', poster: '/api/placeholder/200/300', genre: 'Drama', language: 'Telugu', rating: 4.2, showtimes: ['10:30', '14:00', '17:30', '21:00'] }
        ]
      },
      {
        id: 14,
        name: 'INOX Kandari',
        location: 'Kandari Complex',
        address: 'Kandari Complex, T Nagar, Rajahmundry - 533101',
        amenities: ['Dolby Atmos', '3D', 'Food Court', 'Parking'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 4.2,
        distance: '1.9 km',
        currentMovies: [
          { id: 27, title: 'Dunki', poster: '/api/placeholder/200/300', genre: 'Comedy', language: 'Hindi', rating: 4.0, showtimes: ['10:30', '14:00', '17:30', '21:00'] },
          { id: 28, title: 'Hi Nanna', poster: '/api/placeholder/200/300', genre: 'Drama', language: 'Telugu', rating: 4.3, showtimes: ['11:00', '14:30', '18:00', '21:30'] }
        ]
      }
    ],
    'Eluru': [
      {
        id: 15,
        name: 'PVR Eluru Central',
        location: 'Eluru Central Mall',
        address: 'Eluru Central Mall, Powerpet, Eluru - 534002',
        amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 4.2,
        distance: '1.6 km',
        currentMovies: [
          { id: 29, title: 'Salaar', poster: '/api/placeholder/200/300', genre: 'Action', language: 'Telugu', rating: 4.5, showtimes: ['10:00', '13:30', '17:00', '20:30'] },
          { id: 30, title: 'Eluru Express', poster: '/api/placeholder/200/300', genre: 'Drama', language: 'Telugu', rating: 4.2, showtimes: ['10:30', '14:00', '17:30', '21:00'] }
        ]
      },
      {
        id: 16,
        name: 'Cinepolis Eluru',
        location: 'City Plaza',
        address: 'City Plaza, Sanivarapupeta, Eluru - 534003',
        amenities: ['Dolby Atmos', '3D', 'Recliner Seats', 'Food Court'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 4.0,
        distance: '2.3 km',
        currentMovies: [
          { id: 31, title: 'Extra Ordinary Man', poster: '/api/placeholder/200/300', genre: 'Comedy', language: 'Telugu', rating: 3.8, showtimes: ['10:30', '14:00', '17:30', '21:00'] },
          { id: 32, title: 'Hi Nanna', poster: '/api/placeholder/200/300', genre: 'Drama', language: 'Telugu', rating: 4.3, showtimes: ['11:00', '14:30', '18:00', '21:30'] }
        ]
      }
    ],
    'Anantapur': [
      {
        id: 17,
        name: 'PVR Anantapur Central',
        location: 'Anantapur Central Mall',
        address: 'Anantapur Central Mall, Ram Nagar, Anantapur - 515001',
        amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 4.3,
        distance: '1.7 km',
        currentMovies: [
          { id: 33, title: 'Salaar', poster: '/api/placeholder/200/300', genre: 'Action', language: 'Telugu', rating: 4.5, showtimes: ['10:00', '13:30', '17:00', '20:30'] },
          { id: 34, title: 'Anantapur Express', poster: '/api/placeholder/200/300', genre: 'Drama', language: 'Telugu', rating: 4.2, showtimes: ['10:30', '14:00', '17:30', '21:00'] }
        ]
      },
      {
        id: 18,
        name: 'INOX Anantapur',
        location: 'Anantapur Mall',
        address: 'Anantapur Mall, NH 44, Anantapur - 515001',
        amenities: ['Dolby Atmos', '3D', 'Food Court', 'Parking'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 4.1,
        distance: '2.4 km',
        currentMovies: [
          { id: 35, title: 'Extra Ordinary Man', poster: '/api/placeholder/200/300', genre: 'Comedy', language: 'Telugu', rating: 3.8, showtimes: ['10:30', '14:00', '17:30', '21:00'] },
          { id: 36, title: 'Hi Nanna', poster: '/api/placeholder/200/300', genre: 'Drama', language: 'Telugu', rating: 4.3, showtimes: ['11:00', '14:30', '18:00', '21:30'] }
        ]
      }
    ],
    'Kadapa': [
      {
        id: 19,
        name: 'PVR Kadapa Central',
        location: 'Kadapa Central Mall',
        address: 'Kadapa Central Mall, Yerramukkapalli, Kadapa - 516001',
        amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 4.2,
        distance: '1.5 km',
        currentMovies: [
          { id: 37, title: 'Salaar', poster: '/api/placeholder/200/300', genre: 'Action', language: 'Telugu', rating: 4.5, showtimes: ['10:00', '13:30', '17:00', '20:30'] },
          { id: 38, title: 'Kadapa Express', poster: '/api/placeholder/200/300', genre: 'Drama', language: 'Telugu', rating: 4.2, showtimes: ['10:30', '14:00', '17:30', '21:00'] }
        ]
      },
      {
        id: 20,
        name: 'Cinepolis Kadapa',
        location: 'Kadapa City Center',
        address: 'Kadapa City Center, Railway Station Road, Kadapa - 516001',
        amenities: ['Dolby Atmos', '3D', 'Recliner Seats', 'Food Court'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 4.0,
        distance: '2.2 km',
        currentMovies: [
          { id: 39, title: 'Extra Ordinary Man', poster: '/api/placeholder/200/300', genre: 'Comedy', language: 'Telugu', rating: 3.8, showtimes: ['10:30', '14:00', '17:30', '21:00'] },
          { id: 40, title: 'Hi Nanna', poster: '/api/placeholder/200/300', genre: 'Drama', language: 'Telugu', rating: 4.3, showtimes: ['11:00', '14:30', '18:00', '21:30'] }
        ]
      }
    ],
    'Chittoor': [
      {
        id: 21,
        name: 'PVR Chittoor Central',
        location: 'Chittoor Central Mall',
        address: 'Chittoor Central Mall, Gandhi Road, Chittoor - 517001',
        amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 4.2,
        distance: '1.8 km',
        currentMovies: [
          { id: 41, title: 'Salaar', poster: '/api/placeholder/200/300', genre: 'Action', language: 'Telugu', rating: 4.5, showtimes: ['10:00', '13:30', '17:00', '20:30'] },
          { id: 42, title: 'Chittoor Express', poster: '/api/placeholder/200/300', genre: 'Drama', language: 'Telugu', rating: 4.2, showtimes: ['10:30', '14:00', '17:30', '21:00'] }
        ]
      },
      {
        id: 22,
        name: 'INOX Chittoor',
        location: 'Chittoor Mall',
        address: 'Chittoor Mall, NH 69, Chittoor - 517001',
        amenities: ['Dolby Atmos', '3D', 'Food Court', 'Parking'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 4.0,
        distance: '2.5 km',
        currentMovies: [
          { id: 43, title: 'Extra Ordinary Man', poster: '/api/placeholder/200/300', genre: 'Comedy', language: 'Telugu', rating: 3.8, showtimes: ['10:30', '14:00', '17:30', '21:00'] },
          { id: 44, title: 'Hi Nanna', poster: '/api/placeholder/200/300', genre: 'Drama', language: 'Telugu', rating: 4.3, showtimes: ['11:00', '14:30', '18:00', '21:30'] }
        ]
      }
    ],
    'Srikakulam': [
      {
        id: 23,
        name: 'PVR Srikakulam Central',
        location: 'Srikakulam Central Mall',
        address: 'Srikakulam Central Mall, Main Road, Srikakulam - 532001',
        amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 4.1,
        distance: '1.4 km',
        currentMovies: [
          { id: 45, title: 'Salaar', poster: '/api/placeholder/200/300', genre: 'Action', language: 'Telugu', rating: 4.5, showtimes: ['10:00', '13:30', '17:00', '20:30'] },
          { id: 46, title: 'Srikakulam Express', poster: '/api/placeholder/200/300', genre: 'Drama', language: 'Telugu', rating: 4.2, showtimes: ['10:30', '14:00', '17:30', '21:00'] }
        ]
      },
      {
        id: 24,
        name: 'Cinepolis Srikakulam',
        location: 'Srikakulam City Center',
        address: 'Srikakulam City Center, NH 16, Srikakulam - 532001',
        amenities: ['Dolby Atmos', '3D', 'Recliner Seats', 'Food Court'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 3.9,
        distance: '2.1 km',
        currentMovies: [
          { id: 47, title: 'Extra Ordinary Man', poster: '/api/placeholder/200/300', genre: 'Comedy', language: 'Telugu', rating: 3.8, showtimes: ['10:30', '14:00', '17:30', '21:00'] },
          { id: 48, title: 'Hi Nanna', poster: '/api/placeholder/200/300', genre: 'Drama', language: 'Telugu', rating: 4.3, showtimes: ['11:00', '14:30', '18:00', '21:30'] }
        ]
      }
    ],
    'Narasaraopet': [
      {
        id: 25,
        name: 'PVR Narasaraopet',
        location: 'Narasaraopet Central',
        address: 'Narasaraopet Central, Palnadu Road, Narasaraopet - 522601',
        amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 4.0,
        distance: '1.2 km',
        currentMovies: [
          { id: 49, title: 'Salaar', poster: '/api/placeholder/200/300', genre: 'Action', language: 'Telugu', rating: 4.5, showtimes: ['10:00', '13:30', '17:00', '20:30'] },
          { id: 50, title: 'Narasaraopet Express', poster: '/api/placeholder/200/300', genre: 'Drama', language: 'Telugu', rating: 4.2, showtimes: ['10:30', '14:00', '17:30', '21:00'] }
        ]
      },
      {
        id: 26,
        name: 'INOX Narasaraopet',
        location: 'Narasaraopet Mall',
        address: 'Narasaraopet Mall, Guntur Road, Narasaraopet - 522601',
        amenities: ['Dolby Atmos', '3D', 'Food Court', 'Parking'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 3.8,
        distance: '1.8 km',
        currentMovies: [
          { id: 51, title: 'Extra Ordinary Man', poster: '/api/placeholder/200/300', genre: 'Comedy', language: 'Telugu', rating: 3.8, showtimes: ['10:30', '14:00', '17:30', '21:00'] },
          { id: 52, title: 'Hi Nanna', poster: '/api/placeholder/200/300', genre: 'Drama', language: 'Telugu', rating: 4.3, showtimes: ['11:00', '14:30', '18:00', '21:30'] }
        ]
      }
    ],
    'Mangalagiri': [
      {
        id: 27,
        name: 'PVR Mangalagiri',
        location: 'Mangalagiri Central',
        address: 'Mangalagiri Central, Amaravathi Road, Mangalagiri - 522503',
        amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 4.1,
        distance: '1.5 km',
        currentMovies: [
          { id: 53, title: 'Salaar', poster: '/api/placeholder/200/300', genre: 'Action', language: 'Telugu', rating: 4.5, showtimes: ['10:00', '13:30', '17:00', '20:30'] },
          { id: 54, title: 'Mangalagiri Express', poster: '/api/placeholder/200/300', genre: 'Drama', language: 'Telugu', rating: 4.2, showtimes: ['10:30', '14:00', '17:30', '21:00'] }
        ]
      },
      {
        id: 28,
        name: 'Cinepolis Mangalagiri',
        location: 'Mangalagiri City Center',
        address: 'Mangalagiri City Center, NH 16, Mangalagiri - 522503',
        amenities: ['Dolby Atmos', '3D', 'Recliner Seats', 'Food Court'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 3.9,
        distance: '2.2 km',
        currentMovies: [
          { id: 55, title: 'Extra Ordinary Man', poster: '/api/placeholder/200/300', genre: 'Comedy', language: 'Telugu', rating: 3.8, showtimes: ['10:30', '14:00', '17:30', '21:00'] },
          { id: 56, title: 'Hi Nanna', poster: '/api/placeholder/200/300', genre: 'Drama', language: 'Telugu', rating: 4.3, showtimes: ['11:00', '14:30', '18:00', '21:30'] }
        ]
      }
    ],
    'Kakinada': [
      {
        id: 29,
        name: 'PVR Kakinada Central',
        location: 'Kakinada Central Mall',
        address: 'Kakinada Central Mall, Jagannaickpur, Kakinada - 533001',
        amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 4.3,
        distance: '2.0 km',
        currentMovies: [
          { id: 57, title: 'Salaar', poster: '/api/placeholder/200/300', genre: 'Action', language: 'Telugu', rating: 4.5, showtimes: ['10:00', '13:30', '17:00', '20:30'] },
          { id: 58, title: 'Kakinada Express', poster: '/api/placeholder/200/300', genre: 'Drama', language: 'Telugu', rating: 4.2, showtimes: ['10:30', '14:00', '17:30', '21:00'] }
        ]
      },
      {
        id: 30,
        name: 'INOX Kakinada',
        location: 'Kakinada Mall',
        address: 'Kakinada Mall, Ramanayyapeta, Kakinada - 533005',
        amenities: ['Dolby Atmos', '3D', 'Food Court', 'Parking'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 4.1,
        distance: '2.7 km',
        currentMovies: [
          { id: 59, title: 'Dunki', poster: '/api/placeholder/200/300', genre: 'Comedy', language: 'Hindi', rating: 4.0, showtimes: ['10:30', '14:00', '17:30', '21:00'] },
          { id: 60, title: 'Hi Nanna', poster: '/api/placeholder/200/300', genre: 'Drama', language: 'Telugu', rating: 4.3, showtimes: ['11:00', '14:30', '18:00', '21:30'] }
        ]
      }
    ],
    'Tadepalligudem': [
      {
        id: 31,
        name: 'PVR Tadepalligudem',
        location: 'Tadepalligudem Central',
        address: 'Tadepalligudem Central, NH 16, Tadepalligudem - 534101',
        amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 4.0,
        distance: '1.3 km',
        currentMovies: [
          { id: 61, title: 'Salaar', poster: '/api/placeholder/200/300', genre: 'Action', language: 'Telugu', rating: 4.5, showtimes: ['10:00', '13:30', '17:00', '20:30'] },
          { id: 62, title: 'Tadepalligudem Express', poster: '/api/placeholder/200/300', genre: 'Drama', language: 'Telugu', rating: 4.2, showtimes: ['10:30', '14:00', '17:30', '21:00'] }
        ]
      },
      {
        id: 32,
        name: 'Cinepolis Tadepalligudem',
        location: 'Tadepalligudem City Center',
        address: 'Tadepalligudem City Center, Main Road, Tadepalligudem - 534101',
        amenities: ['Dolby Atmos', '3D', 'Recliner Seats', 'Food Court'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 3.8,
        distance: '1.9 km',
        currentMovies: [
          { id: 63, title: 'Extra Ordinary Man', poster: '/api/placeholder/200/300', genre: 'Comedy', language: 'Telugu', rating: 3.8, showtimes: ['10:30', '14:00', '17:30', '21:00'] },
          { id: 64, title: 'Hi Nanna', poster: '/api/placeholder/200/300', genre: 'Drama', language: 'Telugu', rating: 4.3, showtimes: ['11:00', '14:30', '18:00', '21:30'] }
        ]
      }
    ],
    'Bhimavaram': [
      {
        id: 33,
        name: 'PVR Bhimavaram Central',
        location: 'Bhimavaram Central Mall',
        address: 'Bhimavaram Central Mall, Juvvalapalem Road, Bhimavaram - 534202',
        amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 4.2,
        distance: '1.6 km',
        currentMovies: [
          { id: 65, title: 'Salaar', poster: '/api/placeholder/200/300', genre: 'Action', language: 'Telugu', rating: 4.5, showtimes: ['10:00', '13:30', '17:00', '20:30'] },
          { id: 66, title: 'Bhimavaram Express', poster: '/api/placeholder/200/300', genre: 'Drama', language: 'Telugu', rating: 4.2, showtimes: ['10:30', '14:00', '17:30', '21:00'] }
        ]
      },
      {
        id: 34,
        name: 'INOX Bhimavaram',
        location: 'Bhimavaram Mall',
        address: 'Bhimavaram Mall, NH 165, Bhimavaram - 534202',
        amenities: ['Dolby Atmos', '3D', 'Food Court', 'Parking'],
        screens: ['Screen 1 (Premium)', 'Screen 2 (Regular)'],
        rating: 4.0,
        distance: '2.3 km',
        currentMovies: [
          { id: 67, title: 'Extra Ordinary Man', poster: '/api/placeholder/200/300', genre: 'Comedy', language: 'Telugu', rating: 3.8, showtimes: ['10:30', '14:00', '17:30', '21:00'] },
          { id: 68, title: 'Hi Nanna', poster: '/api/placeholder/200/300', genre: 'Drama', language: 'Telugu', rating: 4.3, showtimes: ['11:00', '14:30', '18:00', '21:30'] }
        ]
      }
    ]
  };

  const getAmenityIcon = (amenity) => {
    switch (amenity.toLowerCase()) {
      case 'parking':
        return <Car className="h-4 w-4 text-blue-500" />;
      case 'food court':
      case 'snacks':
        return <Utensils className="h-4 w-4 text-blue-500" />;
      case 'wifi':
        return <Wifi className="h-4 w-4 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-blue-950 text-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-100 mb-2">Theaters</h1>
          <p className="text-blue-300">Discover theaters and movies in your city</p>
        </div>

        <div className="bg-blue-900 rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-blue-100">Select City</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {Object.keys(theatersData).map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  selectedCity === city
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-800 text-blue-300 hover:bg-blue-700'
                }`}
              >
                {city.split('(')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {(theatersData[selectedCity] || []).map((theater) => (
            <div key={theater.id} className="bg-blue-900 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-blue-100 mb-2">{theater.name}</h3>
                  <div className="flex items-center space-x-2 text-blue-300 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>{theater.address}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-blue-400">
                    <span className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{theater.distance}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{theater.rating}</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {theater.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-1 bg-blue-800 px-3 py-1 rounded-full text-sm text-blue-300"
                    >
                      {getAmenityIcon(amenity)}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {theater.screens.map((screen, index) => (
                    <span
                      key={index}
                      className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {screen}
                    </span>
                  ))}
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-blue-100 mb-4">Now Showing</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {theater.currentMovies.map((movie) => (
                      <div key={movie.id} className="bg-blue-800 rounded-lg p-4">
                        <img
                          src={movie.poster}
                          alt={movie.title}
                          className="w-full h-48 object-cover rounded-lg mb-3"
                        />
                        <h5 className="font-semibold text-blue-100 mb-1">{movie.title}</h5>
                        <p className="text-sm text-blue-300 mb-2">{movie.genre}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-blue-400">{movie.language}</span>
                          <span className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span>{movie.rating}</span>
                          </span>
                        </div>
                        <div className="mt-3">
                          <p className="text-xs text-blue-400 mb-2">Showtimes:</p>
                          <div className="flex flex-wrap gap-1">
                            {movie.showtimes.map((time, idx) => (
                              <span
                                key={idx}
                                className="bg-blue-700 text-white px-2 py-1 rounded text-xs"
                              >
                                {time}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Theaters;
