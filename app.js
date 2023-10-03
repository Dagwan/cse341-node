// Import required modules and dependencies
const express = require('express');
const connectDB = require('./db/db');
const Contact = require('./models/contactModel');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const setupSwagger = require('./swagger');


// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();
// Define the port for the server, defaulting to 8080 if not provided
const PORT = process.env.PORT || 8080;

// Connect to the MongoDB database using the connectDB function
connectDB();

// Parse incoming JSON data in requests
app.use(express.json());

// Use the contactRoutes under the '/contacts' path
app.use('/', require('./routes/contactRoutes'));


// Include the Swagger setup
setupSwagger(app);

// Load data from contacts.json
const contactsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'contacts.json'), 'utf-8'));

// Function to populate the database with initial contacts
const populateDatabase = async () => {
  try {
    for (const contactData of contactsData) {
      // Check if a contact with the same email already exists
      const existingContact = await Contact.findOne({ email: contactData.email });

      if (!existingContact) {
        const contact = new Contact(contactData);
        await contact.save();
      }
    }

    console.log('Database populated with initial contacts');
  } catch (error) {
    console.error('Error populating the database:', error);
  }
};

// Start the server after populating the database
populateDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
