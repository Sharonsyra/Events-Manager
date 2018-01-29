const Center = require('../models').Center;
const Event = require('../models').Event;

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
  },
  retrieve(req, res) {
    return Center
      .findById(req.params.centerId, {})
      .then(center => {
        if(!center) {
          return res.status(404).send({
            message: 'Center Not Found',
          });
        }
        return res.status(200).send(center);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Center
      .findById(req.params.centerId, {})
      .then(center => {
        if (!center) {
          return res.status(404).send({
            message: 'Center Not Found',
          });
        }
        return event
          .update({
            name: req.body.name || center.name,
          })
          .then(() => res.status(200).send(center)) 
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return Center
      .findById(req.params.centerId, {})
      .then(center => {
        if (!center) {
          return res.status(404).send({
            message: 'Center Not Found'
          });
        }
        return center
          .destroy({})
          .then(() => res.status(301).send({
            message: "Center Deleted Successfully!"
          }))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
}
