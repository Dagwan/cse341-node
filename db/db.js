// Import the Mongoose library
const mongoose = require('mongoose');

// Load environment variables from a .env file
require('dotenv').config();

// Define a function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Use Mongoose to establish a connection to the MongoDB database
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'mycontacts',
      useNewUrlParser: true, // Use new URL parser
      useUnifiedTopology: true, // Use new server discovery and monitoring engine
      autoCreate: false // Disable automatic creation
    });

    // If the connection is successful, log a success message
    console.log('MongoDB connected');
  } catch (error) {
    // If there is an error during the connection attempt, log an error message
    console.error(`MongoDB connection error: ${error}`);
  }
};

// Export the connectDB function to make it available to other parts of the application
module.exports = connectDB;
