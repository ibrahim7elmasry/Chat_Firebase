import Firebase from 'firebase';
import firebase from 'react-native-firebase';

const firebaseConfig = {
    apiKey : 'AIzaSyCAe4zvXRmyx3PgI2o2KtEgI1kFZOUMdLA',
    databaseURL:'https://chat1-7e9bd.firebaseio.com',
    projectId: 'chat1-7e9bd',
    appId: '1:479933722063:android:9412010bccbe039531f6ba'
}

export default firebase.initializeApp(firebaseConfig);