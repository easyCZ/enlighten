import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import store from '../store';

import ChatToolbar from './toolbar/ChatToolbar';
import ChatMessages from './messages/ChatMessages';
import ChatInput from './input/ChatInput';
import { Row } from 'react-flexbox-grid';

import Firebase from '../firebase/Firebase';

export default class Chat extends Component {

  sendMessage(message) {
    Firebase.sendMessage('1', message)
      .then((v) => console.log(v.key()))
  }

  render () {
    return (
      <Provider store={store}>
        <Row id="Chat">
          <ChatToolbar style={{backgroundColor: 'rgba(0, 0, 0, 0.15)'}} />
          <div>Chat View: {this.props.chat.chatView}</div>
          <ChatMessages />
          <ChatInput onMessageSend={ this.sendMessage } />
        </Row>
      </Provider>
    );
  }

}

const mapStateToProps = (state) => ({
  chat: state.chat
})
const mapDispatchToProps = (dispatch) => ({

})

export {
  Chat
}
export default connect(mapStateToProps, mapDispatchToProps)(Chat);