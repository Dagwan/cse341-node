const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Create a new contact
router.post('/contacts', contactController.createContact);

// Read all contacts
router.get('/', contactController.getAllContacts);

// Read a contact by ID
router.get('/contacts/:id', contactController.getContactById);

// Update a contact by ID
router.put('/contacts/:id', contactController.updateContactById);

// Delete a contact by ID
router.delete('/contacts/:id', contactController.deleteContactById);

module.exports = router;
