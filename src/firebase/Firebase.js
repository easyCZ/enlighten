import FirebaseConfig from './FirebaseConfig';
import firebase from 'firebase';


class Firebase extends firebase {

    constructor(url) {
        super(url);
    }

    conversations(user) {
      const ref = this.child('conversations').child(user.toString())
      return ref.once('value');
    }





    // login(username) {
    //     return this.child('users').push(username)
    // }

    // getRooms(fn) {
    // 	return this.child('rooms').child('user1').on('value', fn)
    // }

}

const firebaseInstance = new Firebase(FirebaseConfig.url);

export default firebaseInstance;