var removeEven  = require('./Challenge_1').removeEven;
var assert = require('assert');

describe('removeEven', function() {
    it('should return empty array.', function() {
        assert.deepEqual(removeEven([]), [])
    })
    it('should return [1].', function() {
        assert.deepEqual(removeEven([1]), [1])
    })
    it('should return [].', function() {
        assert.deepEqual(removeEven([2]), [])
    })
    it('should return [1].', function() {
        assert.deepEqual(removeEven([1, 2]), [1])
    })
    it('should return [1,5,3].', function() {
        assert.deepEqual(removeEven([1,2,4,5,10,6,3]), [1,5,3])
    })
})