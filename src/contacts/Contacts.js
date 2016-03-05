import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';

import { Row, Col } from 'react-flexbox-grid';

import ContactsToolbar from './toolbar/ContactsToolbar';
import Conversations from './conversations/Conversations';
import { initConversations, loadConversations } from './ContactsActions';
import Firebase from '../firebase/Firebase';
import store from '../store';


class Contacts extends Component {

  componentDidMount() {
    // Trigger loader
    this.props.initConversations();

    Firebase.conversations('user1')
      .then(s => s.val())
      .then(convos => this.props.loadConversations(convos))
  }

  render() {

    return (
      <Provider store={store}>
        <Row middle="xs">
          <Col xs={12} style={{backgroundColor: 'rgba(0, 0, 0, 0.15)'}}>
            <ContactsToolbar />
          </Col>
          <Col xs={12}>
            <Conversations
              items={ this.props.conversations.conversations }
              loading={this.props.conversations.loading}
            />
          </Col>
        </Row>
      </Provider>
    )
  }

}


const mapStateToProps = (state) => ({
  conversations: state.conversations
})

const mapDispatchToProps = (dispatch) => ({
  initConversations: () => dispatch(initConversations()),
  loadConversations: (convos) => dispatch(loadConversations(convos))
})

export {
  Contacts
}
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);