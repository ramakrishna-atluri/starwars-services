const assert = require('assert');
const AnalyticsController = require('../src/controllers/AnalyticsController')

describe('Testing Controller', function() {
    it('should throw an exception', function() {
      let analyticCtrl = new AnalyticsController();
      let promise = analyticCtrl.findLongestCrawl()
        assert.rejects(promise);
    });
});


