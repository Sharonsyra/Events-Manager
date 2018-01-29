const eventsController = require('../controllers').events;
const centersController = require('../controllers').centers;

module.exports = (app) => {
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the Events API!',
  }));

  app.post('/events/', eventsController.create);
  app.get('/events/', eventsController.list);
  app.get('/events/:eventId', eventsController.retrieve);
  app.put('/events/:eventId', eventsController.update);
  app.delete('/events/:eventId', eventsController.destroy);
  
  app.post('/centers/', centersController.create);
  app.get('/centers/', centersController.list);
  app.get('/centers/:centerId', centersController.retrieve);
  app.put('/centers/:centerId', centersController.update);
  app.delete('/centers/:centerId', centersController.destroy);
};