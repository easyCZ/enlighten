import React, { Component } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import FontIcon from 'react-toolbox/lib/font_icon';
import { ToolbarStyle } from '../../Styles';

export default class ContactsToolbar extends Component {

  render () {
    return (
      <Col xs={12} style={ToolbarStyle}>
          <Row middle="xs">

            <Col xs={10}>
              Contacts
            </Col>

            <Col xs={2}>
              <FontIcon value='message' />
            </Col>

          </Row>
      </Col>
    )
  }

}