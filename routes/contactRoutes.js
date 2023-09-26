const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Create a new contact
router.post('/', contactController.createContact);

// Read all contacts
router.get('/', contactController.getAllContacts);

// Read a contact by ID
router.get('/:id', contactController.getContactById);

// Update a contact by ID
router.put('/:id', contactController.updateContactById);

// Delete a contact by ID
router.delete('/:id', contactController.deleteContactById);

module.exports = router;
