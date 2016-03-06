import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { List, Button, Avatar, ProgressBar } from 'react-toolbox';



class Conversations extends Component {

  constructor(props) {
    super(props);
  }

  getListItems(conversations) {
    return Object.keys(conversations).map(id => (
      <Avatar
        onClick={this.props.onSelect.bind(this, id)}
        key={id}
        title={id.toString()}
        style={{display: 'block'}}
      />
    ));
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
      <List selectable ripple style={style}>
        {conversations}
      </List>
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

const style = {
  fontSize: '0.8em'
}


export default Conversations;
