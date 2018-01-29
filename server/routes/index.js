const eventsController = require('../controllers').events;

module.exports = (app) => {
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the Events API!',
  }));

  app.post('/events/', eventsController.create);
};