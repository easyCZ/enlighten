import React, { Component } from 'react';
import { Col } from 'react-flexbox-grid';

import Firebase from '../../firebase/Firebase';


export default class ChatMessages extends Component {

  constructor(props) {
    super(props);

    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    Firebase.watchChat('1', this.onMessageReceive.bind(this))
  }

  onMessageReceive(snapshot) {
    let messages = []
    snapshot.forEach((item) => {
      messages.push(Object.assign(item.val(), {id: item.key()}))
    })
    console.log('Received messages', messages)
    this.setState({ messages })
  }

  renderMessages(messages) {
    return messages.map((m) => <div key={m.id}>{m.text}</div>)
  }

  render() {
    const messages = this.renderMessages(this.state.messages);
    return (
      <Col xs={12}>
        {messages}
      </Col>
    )
  }

}
