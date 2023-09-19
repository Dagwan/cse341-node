// routes.js
const express = require('express');
const router = express.Router();
const Contact = require('./contact');

// Create a new contact
router.post('/contacts', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create contact' });
  }
});

// Read all contacts
router.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve contacts' });
  }
});

// Read a contact by ID
router.get('/contacts/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve contact' });
  }
});

// Update a contact by ID
router.put('/contacts/:id', async (req, res) => {
  // Implement update logic here
});

// Delete a contact by ID
router.delete('/contacts/:id', async (req, res) => {
  // Implement delete logic here
});

module.exports = router;
