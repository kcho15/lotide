const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const {tail} = require('../tail');

describe("#tail", () => {
  
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);  
  });

  it("returns ['darkness' , 'my old friend'] for ['hello', 'darkness' , 'my old friend']", () => {
    assert.deepEqual(tail(['hello', 'darkness' , 'my old friend']), ['darkness' , 'my old friend']); 
  });

});