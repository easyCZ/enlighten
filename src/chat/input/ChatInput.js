import React, { Component } from 'react';
import { Col } from 'react-flexbox-grid';
import Input from 'react-toolbox/lib/input';

import Firebase from '../../firebase/Firebase';


const initialState = { message: '' }


class ChatInput extends Component {

  constructor(props) {
    super(props);

    this.state = Object.assign({}, initialState)
  }

  onMessageSend(event) {
    event.preventDefault()
    this.props.onMessageSend(this.state.message);

    // Reset
    this.setState(Object.assign({}, initialState))
  }

  render() {
    return (
      <Col xs={12}>
        <form onSubmit={this.onMessageSend.bind(this)}>
          <Input
            placeholder="Message"
            type='text'
            value={this.state.message}
            onChange={(v) => this.setState({message: v})}
          />
        </form>
      </Col>
    )
  }

}

ChatInput.propTypes = {
  onMessageSend: React.PropTypes.func.isRequired
}

export default ChatInput;