var version = require('../index');
var assert = require("assert");

it("4.0 > 3.0", function () {
    assert.equal( true  , version('4.0').gt('3.0'));
});


it("4.0.1 > 3.0.2", function () {
    assert.equal( true  , version('4.0.1').gt('3.0.2'));
});


it("3.0.1 > 3.0.0.1", function () {
    assert.equal( true  , version('4.0.1').gt('3.0.2'));
});