
var Toggle = require('toggle')
  , assert = require('assert');


describe('Toggle', function () {

  it('should get the value', function () {
    var toggle = new Toggle(true);
    assert(toggle.value() === true);
  });


  it('should update the value', function () {
    var toggle = new Toggle(true);
    toggle.value(false);
    assert(toggle.value() === false);
  });

  it('should trigger a change', function () {
    var toggle = new Toggle(true);
    toggle.on('change', function (enabled) {
      assert(!enabled);
    });
    toggle.value(false);
  });

  it('should not trigger for the same value', function () {
    var toggle = new Toggle(true)
      , changes = 0;
    toggle.on('change', function (enabled) {
      changes++;
      if (changes == 2) throw new Error();
    });
    toggle.value(false);
    toggle.value(false);
    toggle.value(false);
  });
});
