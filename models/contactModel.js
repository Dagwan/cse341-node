// Import Mongoose library
const mongoose = require('mongoose');

// Define a Mongoose schema for the 'contacts' collection
const contactSchema = new mongoose.Schema({
  // Define the schema fields and their types
  firstName: String,         // First name as a String
  lastName: String,          // Last name as a String
  email: {                   // Email address as a String
    type: String,            // Specify the data type as String
    unique: true             // Ensure that email addresses are unique in the collection
  },
  favoriteColor: String,     // Favorite color as a String
  birthday: Date             // Birthday as a Date
});

// Create and export a Mongoose model for the 'contacts' collection
module.exports = mongoose.model('contacts', contactSchema);
