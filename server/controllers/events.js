const Event = require('../models').Event;

module.exports = {
  create(req, res) {
    return Event
      .create({
        name: req.body.name,
        eventId: req.params.eventId,
      })
      .then(event => res.status(201).send(event))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Event
      .all()
      .then(event => res.status(200).send(event))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Event
      .findAll({
        include: [{
          model: Center,
          as: 'centers',
        }],
      })
      .then(eventCenters => res.status(200).send(eventCenters))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Event
      .findById(req.params.eventId, {
        include: [{
          model: Center,
          as: 'centers',
        }],
      })
      .then(event => {
        if(!event) {
          return res.status(404).send({
            message: 'Event Not Found',
          });
        }
        return res.status(200).send(event);
      })
      .catch(error => res.status(400).send(error));
  },
};