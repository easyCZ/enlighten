import React, { Component } from 'react';
import {Row, Col} from 'react-flexbox-grid';

import ContactsToolbar from './toolbar/ContactsToolbar';
import Conversations from './conversations/Conversations';


export default class Contacts extends Component {

  render() {
    return (
      <Row middle="xs">
        <Col xs={12} style={{backgroundColor: 'rgba(0, 0, 0, 0.15)'}}>
          <ContactsToolbar />
        </Col>
        <Col xs={12}>
          <Conversations />
        </Col>
      </Row>
    )
  }

}