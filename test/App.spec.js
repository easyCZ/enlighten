import React from 'react';
import { App } from '../src/App.js';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';


describe('App with User connected', () => {

    let elem, node;
    let contacts, chat;

    before(() => {
        elem = TestUtils.renderIntoDocument(<App authenticated={true} />)
        node = ReactDOM.findDOMNode(elem)

        contacts = elem.refs.contacts
        chat = elem.refs.chat
    })

    it('should have a Messenger ID', () => {
        expect(node.id).to.be.eql('Messenger');
    })

    it('should have contacts in its subtree', function() {
        expect(contacts).to.be.ok()
    });

    it('should have chat in its subtree', function() {
        expect(chat).to.be.ok()
    });


})