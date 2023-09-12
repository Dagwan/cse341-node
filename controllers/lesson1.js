const dagwanRoute = (req, res) => {
  res.send("Nanret Pan'an");
}
const emmanuelRoute = (req, res) => {
    res.send("Emmanuel Daniel");
  }

  const adamsRoute = (req, res) => {
    res.send("Adams Charles");
  }

  module.exports = {
    emmanuelRoute,
    dagwanRoute,
    adamsRoute,
  };