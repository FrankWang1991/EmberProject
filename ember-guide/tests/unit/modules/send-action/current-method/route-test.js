import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | send-action/current-method', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:send-action/current-method');
    assert.ok(route);
  });
});
