import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Avatar } from 'react-toolbox';
import ConversationStyles from './Conversation.css';


console.log('ConversationStyles', ConversationStyles)

const Conversation = (props) => (
  <Row onClick={props.onClick} style={styles.container} className={ConversationStyles.Conversation}>
    <Col xs={3}>
      <Avatar >
        <img src="https://s-media-cache-ak0.pinimg.com/236x/0c/78/62/0c7862aa65ad6eede84b2b82a501423f.jpg" />
      </Avatar>
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
  avatar: {
    // padding: '0.5rem'
  },
  firstLine: {
    marginTop: '0.1rem',
    marginBottom: '0.4rem'
  },
  headline: {
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
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