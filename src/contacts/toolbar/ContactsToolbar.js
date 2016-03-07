import React, { Component } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import FontIcon from 'react-toolbox/lib/font_icon';
import { ToolbarStyle } from '../../Styles';
import * as Colors from '../../Colors';


const styles = {
  container: {
    height: '50px',
    backgroundColor: Colors.TOOLBAR_BG,
    borderBottom: `1px solid ${Colors.DIVIDER}`
  },
  icon: {
    marginRight: '0.5rem',
    color: Colors.ACCENT
  }
}


export default class ContactsToolbar extends Component {

  render () {
    return (
      <Row between="xs" middle="xs" style={styles.container}>

        <Col xs={10}>
          Contacts
        </Col>

        <Col xs={2}>
          <Row middle="xs" end="xs">
            <FontIcon value='message' style={styles.icon} />
          </Row>
        </Col>

      </Row>
    )
  }

}