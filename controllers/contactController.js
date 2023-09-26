// Import the Contact model from the contactModel.js file
const Contact = require('../models/contactModel');

// Create a new contact
exports.createContact = async (req, res) => {
  try {
    // Create a new contact instance using the request body data
    const contact = new Contact(req.body);

    // Save the new contact to the database
    await contact.save();

    // Respond with a success status code (201) and the ID of the newly created contact in JSON format
    res.status(201).json({ _id: contact._id });
  } catch (error) {
    // If there's an error during contact creation, respond with a server error status code (500) and an error message
    res.status(500).json({ error: 'Unable to create contact' });
  }
};

// Read all contacts
exports.getAllContacts = async (req, res) => {
  try {
    // Retrieve all contacts from the database
    const contacts = await Contact.find();

    // Respond with the list of contacts in JSON format
    res.json(contacts);
  } catch (error) {
    // If there's an error while retrieving contacts, respond with a server error status code (500) and an error message
    res.status(500).json({ error: 'Unable to retrieve contacts' });
  }
};

// Read a contact by ID
exports.getContactById = async (req, res) => {
  try {
    // Find a contact by its ID, which is specified in the request parameters
    const contact = await Contact.findById(req.params.id);

    // If the contact is not found, respond with a not found status code (404) and an error message
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    // Respond with the found contact in JSON format
    res.json(contact);
  } catch (error) {
    // If there's an error while retrieving the contact, respond with a server error status code (500) and an error message
    res.status(500).json({ error: 'Unable to retrieve contact' });
  }
};

exports.updateContactById = async (req, res) => {
  try {
    // Find and update a contact by its ID with the data from the request body
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });

    // If the contact is not found, respond with a not found status code (404) and an error message
    if (!updatedContact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    // Respond with a 204 No Content status code
    res.status(204).end();
  } catch (error) {
    // If there's an error while updating the contact, respond with a server error status code (500) and an error message
    res.status(500).json({ error: 'Unable to update contact' });
  }
};

// Delete a contact by ID
exports.deleteContactById = async (req, res) => {
  try {
    // Find and remove a contact by its ID
    const deletedContact = await Contact.findByIdAndRemove(req.params.id);

    // If the contact is not found, respond with a not found status code (404) and an error message
    if (!deletedContact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    // Respond with a success message in JSON format
    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    // If there's an error while deleting the contact, respond with a server error status code (500) and an error message
    res.status(500).json({ error: 'Unable to delete contact' });
  }
};
