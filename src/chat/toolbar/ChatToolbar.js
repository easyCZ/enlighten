import React, { Component } from 'react';
import { ToolbarStyle } from '../../Styles';
import { Col, Row } from 'react-flexbox-grid';
import FontIcon from 'react-toolbox/lib/font_icon';
import * as Colors from '../../Colors'

class ChatToolbar extends Component {

  render() {
    return (
      <Col xs={12} style={styles.container}>
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

const styles = {
  container: {
    height: '50px',
    backgroundColor: Colors.TOOLBAR_BG,
    borderBottom: `1px solid ${Colors.DIVIDER}`
  },
  icon: {
    marginRight: '0.5rem',
    color: Colors.ACCENT,
    cursor: 'pointer',
    zIndex: 9999
  }
}

export default ChatToolbar