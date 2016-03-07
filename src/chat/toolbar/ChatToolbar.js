import React, { Component } from 'react';
import { ToolbarStyle } from '../../Styles';
import { Col, Row } from 'react-flexbox-grid';
import FontIcon from 'react-toolbox/lib/font_icon';

class ChatToolbar extends Component {

  render() {
    return (
      <Col xs={12} style={ToolbarStyle}>
          <Row>

            <Col xs={10}>
              Conversation ID: {this.props.chatId}
            </Col>

            <Col xs={2}>
              <FontIcon value='add' />
            </Col>

          </Row>
      </Col>
    )
  }

}

export default ChatToolbar