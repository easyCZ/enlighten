import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Avatar } from 'react-toolbox';
import ConversationStyles from './Conversation.css';


console.log('ConversationStyles', ConversationStyles)

const Conversation = (props) => (
  <Row onClick={props.onClick} style={styles.container} className={ConversationStyles.Conversation}>
    <Col xs={3}>
      <Avatar title={props.image.toString()} />
    </Col>
    <Col xs={9}>
      <Row style={styles.firstLine}>
        <Col xs={9} style={styles.headline}>
          {props.name}
        </Col>
        <Col xs={3} style={styles.time}>
          {props.time}
        </Col>
      </Row>
      <Row>
        <Col xs={10} style={styles.message} onClick={(e) => console.log(e)}>
          {props.message}
        </Col>
        <Col xs={2} >
          <div style={styles.active}></div>
        </Col>
      </Row>
    </Col>
  </Row>
)

const styles = {
  container: {
    maxHeight: '90px',
    padding: '0.2rem 0',
    cursor: 'pointer'
  },
  firstLine: {
    marginTop: '0.1rem',
    marginBottom: '0.4rem'
  },
  headline: {
    fontWeight: 'bold'
  },
  time: {
    fontSize: '0.7rem',
    textAlign: 'right'
  },
  message: {
    fontSize: '0.9rem',
    lineHeight: '1.1rem',
    maxHeight: '2rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    // whiteSpace: 'nowrap'
  },
  active: {
    borderRadius: '100%',
    backgroundColor: 'green',
    width: '7px',
    height: '7px',
    display: 'inline-block',
    textAlign: 'right'
  }
}

export default Conversation;