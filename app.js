const express = require('express');
const connectDB = require('./db/db');
const Contact = require('./models/contactModel'); // Adjust the path accordingly
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

connectDB();

app.use(express.json());

const routes = require('./routes/contactRoutes'); // Adjust the path accordingly

app.use('/api', routes);

// Load data from contacts.json
const contactsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'contacts.json'), 'utf-8')
);

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
