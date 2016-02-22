import React, { Component } from 'react';

import ChatToolbar from './toolbar/ChatToolbar';
import ChatMessages from './messages/ChatMessages';
import ChatInput from './input/ChatInput';
import { Row } from 'react-flexbox-grid';


export default class Chat extends Component {

  render () {
    return (
      <Row id="Chat">
        <ChatToolbar style={{backgroundColor: 'rgba(0, 0, 0, 0.15)'}} />
        <ChatMessages />
        <ChatInput />
      </Row>
    );
  }

}

export default Chat;