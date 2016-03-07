import FirebaseConfig from './FirebaseConfig';
import firebase from 'firebase';


const CONVERSATIONS = 'conversations'
const CHATS = 'chats'
const MESSAGES = 'messages'


class Firebase extends firebase {

  constructor(url) {
      super(url);
  }

  conversations(user) {
    const ref = this.child(CONVERSATIONS).child(user.toString())
    return ref.once('value');
  }

  watchChat(chatId, changeFn) {
    return this.child(CHATS).child(chatId).child(MESSAGES).on('value', changeFn)
  }

  sendMessage(chatId, message) {
    return this.child(CHATS)
      .child(chatId)
      .child(MESSAGES)
      .push({ text: message })
  }

}

const firebaseInstance = new Firebase(FirebaseConfig.url);

export default firebaseInstance;