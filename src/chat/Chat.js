import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import store from '../store';

import ChatToolbar from './toolbar/ChatToolbar';
import ChatMessages from './messages/ChatMessages';
import ChatInput from './input/ChatInput';
import { Row } from 'react-flexbox-grid';

import Firebase from '../firebase/Firebase';


class Chat extends Component {

  constructor(props) {
    super(props);
    console.log('Chat', props);

    this.state = {
      messages: []
    }
  }

  sendMessage(message) {
    Firebase.sendMessage(this.props.chatId, message)
      .then((v) => console.log(v.key()))
  }

  subscribe(chatId, callback) {
    return Firebase.subscribe(chatId, callback)
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.chatId != this.props.chatId) {
      Firebase.unsubscribe(this.props.chatId)

      this.subscribe(nextProps.chatId, this.onMessageReceive.bind(this))
    }
  }

  componentDidMount() {
    this.subscribe(this.props.chatId, this.onMessageReceive.bind(this))
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
        <Row id="Chat">
          <ChatToolbar chatId={this.props.chatId} />
          <ChatMessages messages={this.state.messages} />
          <ChatInput onMessageSend={ this.sendMessage.bind(this) } />
        </Row>
    );
  }

}

// Chat.propTypes = {
//   chatId: React.PropTypes.number.isRequired
// }

const mapStateToProps = (state) => ({
  // chatId: state.chat.chatId
})
const mapDispatchToProps = (dispatch) => ({

})

// export {
//   Chat
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Chat);
export default Chat;