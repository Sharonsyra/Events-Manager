const Event = require('../models').Event;
const Center = require('../models').Center;

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
  retrieve(req, res) {
    return Event
      .findById(req.params.eventId, {})
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
  update(req, res) {
    return Event
      .findById(req.params.eventId, {})
      .then(event => {
        if (!event) {
          return res.status(404).send({
            message: 'Event Not Found',
          });
        }
        return event
          .update({
            name: req.body.name || event.name,
          })
          .then(() => res.status(200).send(event)) 
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return Event
      .findById(req.params.eventId, {})
      .then(event => {
        if (!event) {
          return res.status(404).send({
            message: 'Event Not Found'
          });
        }
        return event
          .destroy({})
          .then(() => res.status(301).send({
            message: "Event Deleted Successfully!"
          }))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
};