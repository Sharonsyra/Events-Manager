const eventsController = require('../controllers').events;
const centersController = require('../controllers').centers;

module.exports = (app) => {
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the Events API!',
  }));

  app.post('/events/', eventsController.create);
  app.get('/events/', eventsController.list);
  app.get('/events/eventId', eventsController.retrieve);
  
  app.post('/centers/', centersController.create);
  app.get('/centers/', centersController.list);
};