var findProduct  = require('./Challenge_4').findProduct;
var assert = require('assert');

describe('findProduct', function() {
    it('should return empty array since array is empty.', function() {
        assert.deepEqual(findProduct([]), [])
    })
    it('should return proper array since array has elements.', function() {
        assert.deepEqual(findProduct([1,2,3,4]), [24,12,8,6])
    })
})