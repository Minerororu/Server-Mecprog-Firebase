const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc} = require('firebase/firestore/lite');
const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors());
app.use(express.json());
const firebaseConfig = {
    apiKey: 'AIzaSyBJupSNTmCtRSlH9kQbOZwC1zXsfTC0YBI',
    authDomain: 'svg-angular.firebaseapp.com',
    databaseURL: 'https://svg-angular-default-rtdb.firebaseio.com',
    projectId: 'svg-angular',
    storageBucket: 'svg-angular.appspot.com',
    messagingSenderId: '402634435212',
    appId: '1:402634435212:web:f97eb51809195d654869a9',
    measurementId: 'G-TD2M0NTKC1',
};
const fireApp = initializeApp(firebaseConfig);
const db = getFirestore(fireApp);

app.post('/', function (req, res) {
    const docRef = addDoc(collection(db, req.body[0]), req.body[1]);
    console.log('Document written with ID:' + docRef.id);
})

app.get('/', function (req, res) {
    res.send('teste');
});
  
  
app.listen(process.env.PORT || 8080, () => {
    console.log('Ta aberto no 8080')
});