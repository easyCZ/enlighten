import React, { Component } from 'react';
import { connect } from 'react-redux';

import Contacts from './contacts/Contacts';
import Chat from './chat/Chat';
import Login from './login/Login';
import { login } from './login/LoginActions';
import {Row, Col} from 'react-flexbox-grid';

import { viewChat } from './chat/ChatActions';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      chatId: this.props.chatId
    }
  }

  render() {

    if (this.props.authenticated) {
      return (
        <Row id="Messenger" style={styles}>

          <Col xs={1} sm={4} md={3} id="MessengerContacts" style={styles}>
            <Contacts
              ref="contacts"
              onSelect={this.props.onConversationSelect}
            />
          </Col>

          <Col id="MessengerChat" xs={11} sm={8} md={9} style={styles}>
            { this.props.chatId
              ? <Chat ref="chat" chatId={this.props.chatId} />
              : <div>Select chat to start messaging</div>
            }
          </Col>

        </Row>
      )
    }

    return (
      <Row id="Messenger">
        <Col xs={12}>
          <Row center="xs" middle="xs" style={styles}>
            <Col xs={4}>
              <Login />
            </Col>
          </Row>
        </Col>
      </Row>
    )


  }

}

const styles = {
  width: '100vw',
  height: '100vh',
  margin: 0,
  boxShadow: '0 0 0 0.5px rgba(0, 0, 0, 0.2)'
}

export default connect(
  (state) => ({
    authenticated: state.login.authenticated,
    chatId: state.chat.chatId
  }),
  (dispatch) => ({
    onConversationSelect: (id) => dispatch(viewChat(id))
  })
)(App);

export { App }