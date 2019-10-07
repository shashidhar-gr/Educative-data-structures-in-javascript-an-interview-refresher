var quickSort  = require('./quickSort').quickSort;
var partition  = require('./quickSort').partition;
var assert = require('assert');

describe('partition', function() {
    it('should return 2 since array contains.', function() {
        assert.deepEqual(partition([3, 4, -1, 0, 2], 0, 4), 2)
    })
    it('should return 1 since array contains.', function() {
        assert.deepEqual(partition([3, 4, -1, 0, 2], 0, 1), 1)
    })
    it('should return 0 since array contains.', function() {
        assert.deepEqual(partition([3, 4, -1, 0, 2], 0, 0), 0)
    })
    it('should return 4 since array contains.', function() {
        assert.deepEqual(partition([3, 4, -1, 0, 2], 3, 4), 4)
    })
    it('should return [3, 4, -1, 0, 2] since array contains.', function() {
        assert.deepEqual(quickSort([3, 4, -1, 0, 2], 0, 0), [3, 4, -1, 0, 2])
    })
    it('should return [3, 4, -1, 0, 2] since array contains.', function() {
        assert.deepEqual(quickSort([3, 4, -1, 0, 2], 0, 1), [3, 4, -1, 0, 2])
    })
    it('should return [-1, 3, 4, 0, 2] since array contains.', function() {
        assert.deepEqual(quickSort([3, 4, -1, 0, 2], 0, 2), [-1, 3, 4, 0, 2])
    })
    it('should return [-1, 0, 3, 4, 2] since array contains.', function() {
        assert.deepEqual(quickSort([3, 4, -1, 0, 2], 0, 3), [-1, 0, 3, 4, 2])
    })
    it('should return [-1, 0, 2, 3, 4] since array contains.', function() {
        assert.deepEqual(quickSort([3, 4, -1, 0, 2], 0, 4), [-1, 0, 2, 3, 4])
    })
})