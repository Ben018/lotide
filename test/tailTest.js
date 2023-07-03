const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {

  it("Return ['Lighthouse', 'Labs'] when ['Hello', 'Lighthouse', 'Labs'] is entered", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("Return [] if []", () => {
    assert.deepEqual(tail([]), []);
  });
});
