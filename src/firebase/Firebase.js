import FirebaseConfig from './FirebaseConfig';
import firebase from 'firebase';


const CONVERSATIONS = 'conversations'
const CHATS = 'chats'
const MESSAGES = 'messages'
const USERS = 'users'


class Firebase extends firebase {

  constructor(url) {
      super(url);
  }

  _createUser(username, uid) {
    this.child(USERS).child(username).set({
      uid
    })
  }

  login(username) {
    let createUser = this._createUser.bind(this)
    let authRef;
    return this.authAnonymously({ remember: 'sessionOnly'})
      .then(auth => {
        authRef = auth;
        authRef.username = username
        return createUser(username, auth.uid)
      })
      .then(() => authRef)
  }

  conversations(user) {
    const ref = this.child(CONVERSATIONS).child(user.toString())
    return ref.once('value');
  }

  subscribe(chatId, changeFn) {
    return this._getMessagesRef(chatId).on('value', changeFn)
  }

  unsubscribe(chatId) {
    return this._getMessagesRef(chatId).off('value')
  }

  sendMessage(chatId, message) {
    return this.child(CHATS)
      .child(chatId)
      .child(MESSAGES)
      .push({ text: message })
  }


  _getMessagesRef(chatId) {
    return this.child(CHATS).child(chatId).child(MESSAGES);
  }

}

const firebaseInstance = new Firebase(FirebaseConfig.url);

export default firebaseInstance;