const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');

let _db;

const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }

  MongoClient.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
    .then(async (client) => {
      _db = client;

      // Read the contacts.json file and parse its contents into an array of objects
      const contactsData = JSON.parse(fs.readFileSync('contacts.json', 'utf8'));

      // Ensure that contactsData is an array
      if (!Array.isArray(contactsData)) {
        throw new Error('contactsData is not an array');
      }

      // Get the MongoDB collection
      const collection = _db.db().collection('contacts');

      // Insert each document from the JSON file into the collection, checking for duplicates
      for (const contact of contactsData) {
        const existingContact = await collection.findOne({
          $or: [{ email: contact.email }, { firstName: contact.firstName }]
        });

        if (!existingContact) {
          await collection.insertOne(contact);
          console.log(`Inserted contact: ${contact.firstName} ${contact.lastName}`);
        } else {
          console.log(`Skipped duplicate contact: ${contact.firstName} ${contact.lastName}`);
        }
      }
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};
