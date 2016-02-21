import React from 'react';
import expect from 'expect.js';
import { App } from '../src/App.js';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';


describe('App', () => {

    let app;
    let div;

    before('render and locate', function () {
        app = TestUtils.renderIntoDocument(<App />)
        div = ReactDOM.findDOMNode(app)
    });

    it('should be true', function() {
        expect(div).to.be.ok();
    })

    it('should be false', () => {
        expect('something').to.not.be.ok();
    })

})