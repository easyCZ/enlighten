import React, { Component } from 'react';
import { Col } from 'react-flexbox-grid';

import Firebase from '../../firebase/Firebase';


class ChatMessages extends Component {

  constructor(props) {
    super(props);
  }


  renderMessages(messages) {
    return messages.map((m) => <div key={m.id}>{m.text}</div>)
  }

  render() {
    const messages = this.renderMessages(this.props.messages);
    return (
      <Col xs={12}>
        {messages}
      </Col>
    )
  }

}

ChatMessages.propTypes = {
  messages: React.PropTypes.array.isRequired
}

export default ChatMessages;