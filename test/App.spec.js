import React from 'react';
import { App } from '../src/App.js';
import { Contacts } from '../src/contacts/Contacts';
import TestUtils from 'react-addons-test-utils';
import { findWithRef } from 'react-shallow-testutils';
import ReactDOM from 'react-dom';


describe('App with User connected and chat Id', () => {

    const renderer = TestUtils.createRenderer();

    before(() => {
        renderer.render(<App authenticated={true} chatId={123} />)
    })

    it('should have contacts in its subtree', function() {
        expect(findWithRef(renderer.getRenderOutput(), 'contacts')).to.be.ok();
    });

    it('should have chat in its subtree', function() {
        expect(findWithRef(renderer.getRenderOutput(), 'chat')).to.be.ok();
    });


})