import React from 'react';

import ChatToolbar from './toolbar/ChatToolbar';
import ChatMessages from './messages/ChatMessages';
import ChatInput from './input/ChatInput';


const Chat = () => (
  <div id="Chat" className="row">
    <ChatToolbar />
    <ChatMessages />
    <ChatInput />
  </div>
);

export default Chat;