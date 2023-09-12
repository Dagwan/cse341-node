const dagwanRoute = (req, res) => {
  res.send("Dagwan Pan'an Danladi");
}
const emmanuelRoute = (req, res) => {
    res.send("Emmanuel Pan'an Danladi");
  }

  const adamsRoute = (req, res) => {
    res.send("Adams Charles");
  }

  module.exports = {
    emmanuelRoute,
    dagwanRoute,
    adamsRoute,
  };