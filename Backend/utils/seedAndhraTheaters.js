const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Cinema = require('../models/Cinema');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB connection successful for Andhra Pradesh theaters seeding!');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

const andhraTheaters = {
  'Visakhapatnam (Vizag)': [
    {
      name: 'PVR Icon Cinemas',
      location: 'CMR Central Mall',
      address: 'CMR Central Mall, Maddilapalem, Visakhapatnam - 530013',
      amenities: ['Dolby Atmos', '4K Projection', 'Recliner Seats', 'Food Court', 'Parking'],
      screens: [
        { name: 'Screen 1', type: 'imax', seatingCapacity: 300 },
        { name: 'Screen 2', type: 'premium', seatingCapacity: 200 },
        { name: 'Screen 3', type: 'regular', seatingCapacity: 150 }
      ],
      rating: 4.6
    },
    {
      name: 'INOX Varun Beach',
      location: 'Varun Inox Mall',
      address: 'Varun Inox Mall, Beach Road, Visakhapatnam - 530002',
      amenities: ['Dolby Atmos', '3D', 'Food Court', 'Parking', 'Wheelchair Access'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 250 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 180 }
      ],
      rating: 4.4
    }
  ],
  'Vijayawada': [
    {
      name: 'PVR PVP Square',
      location: 'PVP Square Mall',
      address: 'PVP Square Mall, MG Road, Vijayawada - 520010',
      amenities: ['Dolby Atmos', '4K Projection', 'Recliner Seats', 'Food Court', 'Parking'],
      screens: [
        { name: 'Screen 1', type: 'imax', seatingCapacity: 280 },
        { name: 'Screen 2', type: 'premium', seatingCapacity: 220 }
      ],
      rating: 4.5
    },
    {
      name: 'INOX Ripples Mall',
      location: 'Ripples Mall',
      address: 'Ripples Mall, Benz Circle, Vijayawada - 520010',
      amenities: ['Dolby Atmos', '3D', 'Food Court', 'Parking', 'Gaming Zone'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 200 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 160 },
        { name: 'Screen 3', type: 'regular', seatingCapacity: 140 }
      ],
      rating: 4.3
    }
  ],
  'Guntur': [
    {
      name: 'PVR Grand Mall',
      location: 'Grand Mall',
      address: 'Grand Mall, Brodipet, Guntur - 522002',
      amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 240 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 180 }
      ],
      rating: 4.4
    },
    {
      name: 'Cinepolis Guntur',
      location: 'City Center Mall',
      address: 'City Center Mall, Arundelpet, Guntur - 522002',
      amenities: ['Dolby Atmos', '3D', 'Recliner Seats', 'Food Court'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 220 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 150 }
      ],
      rating: 4.2
    }
  ],
  'Nellore': [
    {
      name: 'PVR Nellore Central',
      location: 'Nellore Central Mall',
      address: 'Nellore Central Mall, Trunk Road, Nellore - 524001',
      amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 200 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 160 }
      ],
      rating: 4.3
    },
    {
      name: 'INOX MGB Felicity',
      location: 'MGB Felicity Mall',
      address: 'MGB Felicity Mall, Magunta Layout, Nellore - 524003',
      amenities: ['Dolby Atmos', '3D', 'Food Court', 'Parking'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 180 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 140 }
      ],
      rating: 4.1
    }
  ],
  'Tirupati': [
    {
      name: 'PVR Tirumala',
      location: 'Tirumala Mall',
      address: 'Tirumala Mall, Renigunta Road, Tirupati - 517501',
      amenities: ['Dolby Atmos', '4K Projection', 'Recliner Seats', 'Food Court'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 250 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 180 }
      ],
      rating: 4.5
    },
    {
      name: 'INOX Leela Mahal',
      location: 'Leela Mahal',
      address: 'Leela Mahal, AIR Bypass Road, Tirupati - 517501',
      amenities: ['Dolby Atmos', '3D', 'Food Court', 'Parking'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 220 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 160 }
      ],
      rating: 4.2
    }
  ],
  'Kurnool': [
    {
      name: 'PVR Kurnool Central',
      location: 'Kurnool Central Mall',
      address: 'Kurnool Central Mall, Budhwar Peth, Kurnool - 518001',
      amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 200 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 160 }
      ],
      rating: 4.3
    },
    {
      name: 'Cinepolis Kurnool',
      location: 'City Center',
      address: 'City Center, Nandyal Road, Kurnool - 518001',
      amenities: ['Dolby Atmos', '3D', 'Recliner Seats', 'Food Court'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 180 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 140 }
      ],
      rating: 4.1
    }
  ],
  'Rajahmundry': [
    {
      name: 'PVR River Bay',
      location: 'River Bay Mall',
      address: 'River Bay Mall, Danavaipeta, Rajahmundry - 533103',
      amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 220 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 180 }
      ],
      rating: 4.4
    },
    {
      name: 'INOX Kandari',
      location: 'Kandari Complex',
      address: 'Kandari Complex, T Nagar, Rajahmundry - 533101',
      amenities: ['Dolby Atmos', '3D', 'Food Court', 'Parking'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 200 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 160 }
      ],
      rating: 4.2
    }
  ],
  'Eluru': [
    {
      name: 'PVR Eluru Central',
      location: 'Eluru Central Mall',
      address: 'Eluru Central Mall, Powerpet, Eluru - 534002',
      amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 180 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 140 }
      ],
      rating: 4.2
    },
    {
      name: 'Cinepolis Eluru',
      location: 'City Plaza',
      address: 'City Plaza, Sanivarapupeta, Eluru - 534003',
      amenities: ['Dolby Atmos', '3D', 'Recliner Seats', 'Food Court'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 160 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 120 }
      ],
      rating: 4.0
    }
  ],
  'Anantapur': [
    {
      name: 'PVR Anantapur Central',
      location: 'Anantapur Central Mall',
      address: 'Anantapur Central Mall, Ram Nagar, Anantapur - 515001',
      amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 200 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 160 }
      ],
      rating: 4.3
    },
    {
      name: 'INOX Anantapur',
      location: 'Anantapur Mall',
      address: 'Anantapur Mall, NH 44, Anantapur - 515001',
      amenities: ['Dolby Atmos', '3D', 'Food Court', 'Parking'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 180 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 140 }
      ],
      rating: 4.1
    }
  ],
  'Kadapa': [
    {
      name: 'PVR Kadapa Central',
      location: 'Kadapa Central Mall',
      address: 'Kadapa Central Mall, Yerramukkapalli, Kadapa - 516001',
      amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 180 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 140 }
      ],
      rating: 4.2
    },
    {
      name: 'Cinepolis Kadapa',
      location: 'Kadapa City Center',
      address: 'Kadapa City Center, Railway Station Road, Kadapa - 516001',
      amenities: ['Dolby Atmos', '3D', 'Recliner Seats', 'Food Court'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 160 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 120 }
      ],
      rating: 4.0
    }
  ],
  'Chittoor': [
    {
      name: 'PVR Chittoor Central',
      location: 'Chittoor Central Mall',
      address: 'Chittoor Central Mall, Gandhi Road, Chittoor - 517001',
      amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 180 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 140 }
      ],
      rating: 4.2
    },
    {
      name: 'INOX Chittoor',
      location: 'Chittoor Mall',
      address: 'Chittoor Mall, NH 69, Chittoor - 517001',
      amenities: ['Dolby Atmos', '3D', 'Food Court', 'Parking'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 160 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 120 }
      ],
      rating: 4.0
    }
  ],
  'Srikakulam': [
    {
      name: 'PVR Srikakulam Central',
      location: 'Srikakulam Central Mall',
      address: 'Srikakulam Central Mall, Main Road, Srikakulam - 532001',
      amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 160 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 120 }
      ],
      rating: 4.1
    },
    {
      name: 'Cinepolis Srikakulam',
      location: 'Srikakulam City Center',
      address: 'Srikakulam City Center, NH 16, Srikakulam - 532001',
      amenities: ['Dolby Atmos', '3D', 'Recliner Seats', 'Food Court'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 140 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 100 }
      ],
      rating: 3.9
    }
  ],
  'Narasaraopet': [
    {
      name: 'PVR Narasaraopet',
      location: 'Narasaraopet Central',
      address: 'Narasaraopet Central, Palnadu Road, Narasaraopet - 522601',
      amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 150 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 120 }
      ],
      rating: 4.0
    },
    {
      name: 'INOX Narasaraopet',
      location: 'Narasaraopet Mall',
      address: 'Narasaraopet Mall, Guntur Road, Narasaraopet - 522601',
      amenities: ['Dolby Atmos', '3D', 'Food Court', 'Parking'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 140 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 110 }
      ],
      rating: 3.8
    }
  ],
  'Mangalagiri': [
    {
      name: 'PVR Mangalagiri',
      location: 'Mangalagiri Central',
      address: 'Mangalagiri Central, Amaravathi Road, Mangalagiri - 522503',
      amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 160 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 130 }
      ],
      rating: 4.1
    },
    {
      name: 'Cinepolis Mangalagiri',
      location: 'Mangalagiri City Center',
      address: 'Mangalagiri City Center, NH 16, Mangalagiri - 522503',
      amenities: ['Dolby Atmos', '3D', 'Recliner Seats', 'Food Court'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 150 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 120 }
      ],
      rating: 3.9
    }
  ],
  'Kakinada': [
    {
      name: 'PVR Kakinada Central',
      location: 'Kakinada Central Mall',
      address: 'Kakinada Central Mall, Jagannaickpur, Kakinada - 533001',
      amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 200 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 160 }
      ],
      rating: 4.3
    },
    {
      name: 'INOX Kakinada',
      location: 'Kakinada Mall',
      address: 'Kakinada Mall, Ramanayyapeta, Kakinada - 533005',
      amenities: ['Dolby Atmos', '3D', 'Food Court', 'Parking'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 180 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 140 }
      ],
      rating: 4.1
    }
  ],
  'Tadepalligudem': [
    {
      name: 'PVR Tadepalligudem',
      location: 'Tadepalligudem Central',
      address: 'Tadepalligudem Central, NH 16, Tadepalligudem - 534101',
      amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 140 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 110 }
      ],
      rating: 4.0
    },
    {
      name: 'Cinepolis Tadepalligudem',
      location: 'Tadepalligudem City Center',
      address: 'Tadepalligudem City Center, Main Road, Tadepalligudem - 534101',
      amenities: ['Dolby Atmos', '3D', 'Recliner Seats', 'Food Court'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 130 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 100 }
      ],
      rating: 3.8
    }
  ],
  'Bhimavaram': [
    {
      name: 'PVR Bhimavaram Central',
      location: 'Bhimavaram Central Mall',
      address: 'Bhimavaram Central Mall, Juvvalapalem Road, Bhimavaram - 534202',
      amenities: ['Dolby Atmos', '4K Projection', 'Food Court', 'Parking'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 160 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 130 }
      ],
      rating: 4.2
    },
    {
      name: 'INOX Bhimavaram',
      location: 'Bhimavaram Mall',
      address: 'Bhimavaram Mall, NH 165, Bhimavaram - 534202',
      amenities: ['Dolby Atmos', '3D', 'Food Court', 'Parking'],
      screens: [
        { name: 'Screen 1', type: 'premium', seatingCapacity: 150 },
        { name: 'Screen 2', type: 'regular', seatingCapacity: 120 }
      ],
      rating: 4.0
    }
  ]
};

const seedAndhraTheaters = async () => {
  try {
    console.log('🎬 Seeding Andhra Pradesh theaters...');
    
    let totalTheaters = 0;
    
    for (const [city, theaters] of Object.entries(andhraTheaters)) {
      console.log(`Adding ${theaters.length} theaters for ${city}...`);
      
      for (const theater of theaters) {
        await Cinema.create({
          ...theater,
          city: city
        });
        totalTheaters++;
      }
    }
    
    console.log(`✅ Successfully added ${totalTheaters} theaters across ${Object.keys(andhraTheaters).length} cities!`);
    
  } catch (error) {
    console.error('Error seeding Andhra theaters:', error);
  }
};

const seedDB = async () => {
  try {
    // Clear existing cinemas
    await Cinema.deleteMany({});
    console.log('Cleared existing cinemas...');
    
    // Seed Andhra Pradesh theaters
    await seedAndhraTheaters();
    
    console.log('🎉 Andhra Pradesh theaters seeding completed!');
    
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

// Connect to database and seed
connectDB().then(() => {
  seedDB().then(() => {
    process.exit();
  });
});
