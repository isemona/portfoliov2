const artWork = require('./art-work/art-work.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(artWork);
};
