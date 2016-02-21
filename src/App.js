import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Contacts from './contacts/Contacts';
import Chat from './chat/Chat';


const App = () => (
  <div id="Messenger" className="row top-xs" style={styles}>

    <div id="MessengerContacts" className="col-xs-1 col-sm-4 col-md-3" style={styles}>
      <Contacts />
    </div>

    <div id="MessengerChat" className="col-xs-11 col-sm-8 col-md-9" style={styles}>
      <Chat />
    </div>

  </div>
)


const styles = {
  width: '100vw',
  height: '100vh',
  margin: 0,
  boxShadow: '0 0 0 0.5px rgba(0, 0, 0, 0.2)'
}

export default App;