import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';

import { Row, Col } from 'react-flexbox-grid';

import ContactsToolbar from './toolbar/ContactsToolbar';
import ContactsSearch from './search/ContactsSearch';
import Conversations from './conversations/Conversations';
import { initConversations, loadConversations } from './ContactsActions';
import * as ChatActions from '../chat/ChatActions';
import Firebase from '../firebase/Firebase';
import store from '../store';

import * as Colors from '../Colors';


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
          <Col xs={12} >
            <ContactsToolbar />
          </Col>
          <Col xs={12} >
            <ContactsSearch />
          </Col>
          <Col xs={12} style={style.conversations}>
            <Conversations
              items={ this.props.conversations.conversations }
              loading={this.props.conversations.loading}
              onSelect={this.props.selectConversation}
            />
          </Col>
        </Row>
      </Provider>
    )
  }

}

const style = {
  conversations: {
    // padding: 0,
    height: '100%',
    backgroundColor: Colors.CONTACTS_BG
  }
}


const mapStateToProps = (state) => ({
  conversations: state.conversations
})

const mapDispatchToProps = (dispatch) => ({
  initConversations: () => dispatch(initConversations()),
  loadConversations: (convos) => dispatch(loadConversations(convos)),
  selectConversation: (id) => dispatch(ChatActions.viewChat(id))
})

export {
  Contacts
}
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);