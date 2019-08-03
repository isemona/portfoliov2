const assert = require('assert');
const app = require('../../src/app');

describe('\'art-work\' service', () => {
  it('registered the service', () => {
    const service = app.service('art-work');

    assert.ok(service, 'Registered the service');
  });
});
