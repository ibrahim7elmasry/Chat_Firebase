import Firebase from 'firebase';
import firebase from 'react-native-firebase';

const firebaseConfig = {
    apiKey : '',
    databaseURL:'',
    projectId: '',
    appId: ''
}

export default firebase.initializeApp(firebaseConfig);