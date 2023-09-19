const Contact = require('../models/contactModel');

// Create a new contact
exports.createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create contact' });
  }
};

// Read all contacts
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve contacts' });
  }
};

// Read a contact by ID
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve contact' });
  }
};

// Update a contact by ID
exports.updateContactById = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedContact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json(updatedContact);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update contact' });
  }
};

// Delete a contact by ID
exports.deleteContactById = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndRemove(req.params.id);

    if (!deletedContact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete contact' });
  }
};
