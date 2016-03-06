import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import store from '../store';

import ChatToolbar from './toolbar/ChatToolbar';
import ChatMessages from './messages/ChatMessages';
import ChatInput from './input/ChatInput';
import { Row } from 'react-flexbox-grid';


export default class Chat extends Component {

  render () {
    return (
      <Provider store={store}>
        <Row id="Chat">
          <ChatToolbar style={{backgroundColor: 'rgba(0, 0, 0, 0.15)'}} />
          <div>Chat View: {this.props.chat.chatView}</div>
          <ChatMessages />
          <ChatInput />
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