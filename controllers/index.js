// Import necessary modules or dependencies if required.

// Define a controller function for the "dagwanRoute" route.
const nanretRoute = (req, res) => {
  // Send a response to the client with the text "Nanret Pan'an".
  res.send("Nanret Pan'an");
}

// Define a controller function for the "emmanuelRoute" route.
const emmanuelRoute = (req, res) => {
  // Send a response to the client with the text "Emmanuel Daniel".
  res.send("Emmanuel Daniel");
}

// Define a controller function for the "adamsRoute" route.
const adamsRoute = (req, res) => {
  // Send a response to the client with the text "Adams Charles".
  res.send("Adams Charles");
}

// Export the controller functions to make them available to other parts of the application.
module.exports = {
  nanretRoute,
  emmanuelRoute,
  adamsRoute,
};
