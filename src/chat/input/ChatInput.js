import React, { Component } from 'react';
import { Col } from 'react-flexbox-grid';
import Input from 'react-toolbox/lib/input';

import Firebase from '../../firebase/Firebase';


const initialState = { message: '' }


export default class ChatInput extends Component {

  constructor(props) {
    super(props);

    this.state = Object.assign({}, initialState)
  }

  onMessageSend(event) {
    event.preventDefault()

    Firebase.sendMessage('1', this.state.message)
      .then((v) => console.log(v.key()))

    this.setState(Object.assign({}, initialState))
  }

  render() {
    return (
      <Col xs={12}>
        <form onSubmit={this.onMessageSend.bind(this)}>
          <Input
            label='Message..'
            type='text'
            value={this.state.message}
            onChange={(v) => this.setState({message: v})}
          />
        </form>
      </Col>
    )
  }

}
