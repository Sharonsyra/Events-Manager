const Center = require('../models').Center;

module.exports = {
  create(req, res) {
      return Center
        .create({
            name: req.body.name,
            centerId: req.body.centerId,
        })
        .then(center => res.status(201).send(center))
        .catch(error => res.status(400).send(error));
  },
  list(req, res) {
      return Center
        .all()
        .then(center => res.status(200).send(center))
        .catch(error => res.status(400).send(error));
  }
}
