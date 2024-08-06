const notFound = (req, res) => res.status(404).send('Routes not Found');

module.exports = notFound;
