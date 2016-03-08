import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { List, Button, Avatar, ProgressBar } from 'react-toolbox';

import Conversation from './Conversation';




class Conversations extends Component {

  constructor(props) {
    super(props);
  }

  getListItems(conversations) {
    return Object.keys(conversations).map(id => {
      let conversation = {
        id,
        name: `First Last ${id}`,
        image: id,
        time: Math.ceil(Date.now() / 1000000000),
        message: `This is the last message of the conversation id ${id}. There's some more text after this sentence and now there is some more`
      }
      return (
        <Conversation onClick={this.props.onSelect.bind(this, +id)} {...conversation} />
      )
    });
  }

  renderProgressBar() {
    return (
      <Row center="xs" middle="xs">
        <Col xs={6}>
          <ProgressBar type="circular" mode="indeterminate" />
        </Col>
      </Row>
    )
  }

  renderConversations() {
    let conversations = this.getListItems(this.props.items);
    return (
      <div>
        {conversations}
      </div>
    )
  }

  render() {
    return this.props.loading
      ? this.renderProgressBar()
      : this.renderConversations();
  }

}

Conversations.propTypes = {
  items: React.PropTypes.object.isRequired,
  loading: React.PropTypes.bool.isRequired,
  onSelect: React.PropTypes.func.isRequired
}



export default Conversations;
