import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import store from '../store';

import ChatToolbar from './toolbar/ChatToolbar';
import ChatMessages from './messages/ChatMessages';
import ChatInput from './input/ChatInput';
import { Row } from 'react-flexbox-grid';

import Firebase from '../firebase/Firebase';


export default class Chat extends Component {

  constructor(props) {
    super(props);

    this.state = {
      messages: []
    }
  }

  sendMessage(message) {
    Firebase.sendMessage('1', message)
      .then((v) => console.log(v.key()))
  }

  componentDidMount() {
    Firebase.watchChat('1', this.onMessageReceive.bind(this))
  }

  onMessageReceive(snapshot) {
    let messages = []
    snapshot.forEach((item) => {
      messages.push(Object.assign(item.val(), {id: item.key()}))
    })

    this.setState({ messages })
  }

  render () {
    return (
      <Provider store={store}>
        <Row id="Chat">
          <ChatToolbar />
          <ChatMessages messages={this.state.messages} />
          <ChatInput onMessageSend={ this.sendMessage } />
        </Row>
      </Provider>
    );
  }

}

const mapStateToProps = (state) => ({
  chatId: state.chat.chatId
})
const mapDispatchToProps = (dispatch) => ({

})

export {
  Chat
}
export default connect(mapStateToProps, mapDispatchToProps)(Chat);