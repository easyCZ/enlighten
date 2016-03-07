import React, { Component } from 'react';
import Input from 'react-toolbox/lib/input';
import { Col, Row } from 'react-flexbox-grid';
import FontIcon from 'react-toolbox/lib/font_icon';
import * as Colors from '../../Colors';


class ContactsSearch extends Component {

  render() {
    return (
      <Row style={styles.container} >
        <Col xs={12}>
          <Input
            style={styles.input}
            type='text'
            placeholder="Search.."
            name='name'
          />
          <FontIcon value="search" style={styles.icon} />
        </Col>
      </Row>

    )
  }

}

const styles = {
  container: {
    marginTop: '-1.5rem',
    position: 'relative'
  },
  input: {
    fontSize: '1rem',
    maxWidth: 'calc(100% - 2rem)',
  },
  icon: {
    zIndex: 99999,
    position: 'absolute',
    top: '40%',
    right: '0.5rem',
    color: Colors.ACCENT
  }
}

export default ContactsSearch;