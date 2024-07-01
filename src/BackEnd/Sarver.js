// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import cors from 'cors'; // Import cors package

// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(cors()); // Add cors middleware to allow all origins

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://VyasVishal2024:s5aTiHfFHjgFE0GP@cluster0.ccr70ve.mongodb.net/MovieListDb');


// const Movie = mongoose.model('Movie', movieSchema);



// app.post('/add-to-watchlist', (req, res) => {
//   const movieData = req.body; // Assuming the request body contains movie data in JSON format

//   // Here you can process the received movieData, such as saving it to a database or performing other operations
//   console.log('Received movie data:', movieData);

//   // Example response: send back a success message
//   res.status(200).json({ message: 'Movie added to watchlist successfully' });
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });




import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB (replace with your MongoDB connection string)
mongoose.connect('mongodb+srv://VyasVishal2024:s5aTiHfFHjgFE0GP@cluster0.ccr70ve.mongodb.net/MovieListDb');

// Define movie schema
const movieSchema = new mongoose.Schema({
  title: String,
  poster_path: String,
  vote_average: Number,
  original_language: String,
  release_date: Date,
  // Add other fields as needed
});

// Create Movie model
const Movie = mongoose.model('Movie', movieSchema);

app.get('/', (req, res) => {
  res.send('hello world')
})

// POST endpoint for adding to watchlist
app.post('/add-to-watchlist', async (req, res) => {
  const movieData = req.body;

  
  
  try {
    // Create a new movie document using the Movie model
    const newMovie = new Movie({
      title: movieData.title,
      poster_path: movieData.poster_path,
      vote_average: movieData.vote_average,
      original_language: movieData.original_language,
      release_date: movieData.release_date,
      // Add other fields as needed
    });
    
    // Save the new movie document to MongoDB
    await newMovie.save();
    
    res.send('newMovie')
    console.log('Movie added to database:', newMovie);
    
    // Respond with a success message
    res.status(200).json({ message: 'Movie added to watchlist successfully', movie: newMovie });
  } catch (error) {
    console.error('Error adding movie to database:', error);
    res.status(500).json({ message: 'Failed to add movie to watchlist' });
  }
});


// app.get('/', (req, res) => {
//   res.send('hello world')
// })





// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});







