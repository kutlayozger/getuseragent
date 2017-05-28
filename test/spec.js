/*global describe, it */
'use strict';

var assert = require('assert'),
    lib = require('../lib/useragents');

describe('test', function () {
    it('Get any user agent', function () {
        var ua = lib.getUserAgent();
        console.log(ua);
        assert.notEqual(ua, '');
    });
});
