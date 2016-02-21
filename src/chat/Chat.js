import React from 'react';

import ChatToolbar from './toolbar/ChatToolbar';
import ChatMessages from './messages/ChatMessages';
import ChatInput from './input/ChatInput';
import { Row } from 'react-flexbox-grid';

const Chat = () => (
  <Row id="Chat">
    <ChatToolbar style={{backgroundColor: 'rgba(0, 0, 0, 0.15)'}} />
    <ChatMessages />
    <ChatInput />
  </Row>
);

export default Chat;