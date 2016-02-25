var jsdom = require('jsdom');
var expect = require('expect.js');

global.expect = expect;

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = {userAgent: 'node.js'};