import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Contacts from './contacts/Contacts';
import Chat from './chat/Chat';
import {Row, Col} from 'react-flexbox-grid';


const App = () => (
  <Row id="Messenger" style={styles}>

    <Col xs={1} sm={4} md={3} id="MessengerContacts" style={styles}>
      <Contacts />
    </Col>

    <Col id="MessengerChat" xs={11} sm={8} md={9} style={styles}>
      <Chat />
    </Col>

  </Row>
)

const styles = {
  // width: '100vw',
  // height: '100vh',
  margin: 0,
  boxShadow: '0 0 0 0.5px rgba(0, 0, 0, 0.2)'
}

export default App;