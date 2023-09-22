const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  try {
    const result = await mongodb.getDb().db().collection('contacts').find().toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (error) {
    console.error('Error getting all contacts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  try {
    const result = await mongodb.getDb().db().collection('contacts').findOne({ _id: userId });
    if (!result) {
      res.status(404).json({ error: 'Contact not found' });
      return;
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (error) {
    console.error('Error getting a single contact:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getAll, getSingle };
