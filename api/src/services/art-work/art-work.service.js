// Initializes the `art-work` service on path `/art-work`
const createService = require('feathers-nedb');
const createModel = require('../../models/art-work.model');
const hooks = require('./art-work.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/art-work', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('art-work');

  service.hooks(hooks);
};
