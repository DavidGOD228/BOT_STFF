var https = require('https');
var firebase = require('firebase');
const firebaseConfig = {
    apiKey: "AIzaSyBwoyysswhP9-TD1E8AFRwMj6wyv2aTLYw",
    authDomain: "drugstff.firebaseapp.com",
    databaseURL: "https://drugstff.firebaseio.com",
    projectId: "drugstff",
    storageBucket: "drugstff.appspot.com",
    messagingSenderId: "593566976255",
    appId: "1:593566976255:web:88e2313754f766915064ca",
    measurementId: "G-3XLQQBCFYE"
  };
require('firebase/auth');
require('firebase/database');

var app = firebase.initializeApp(firebaseConfig);
app.auth();

let db = firebase.firestore();

module.exports = {
  request: function request(options) {
    return new Promise(function(resolve, reject) {
      https
        .request(options, function(res) {
          var chunks = [];

          res.on('data', function(chunk) {
            chunks.push(chunk);
          });

          res.on('end', function(chunk) {
            let body = Buffer.concat(chunks);
            let jsonB = JSON.parse(body.toString());
            let data = jsonB.data;

            resolve(jsonB.data);
          });

          res.on('error', function(error) {
            console.error('Error: ', error);
          });
        })
        .end();
        
  });
},
  db: db,
  getUsers: async () => {
    var data = [];
    const userData = await db.collection('UserList').get();
    userData.forEach(doc => {
      data.push(doc.data());
    });
    return data;
  },
  addUsers: async freelancehuntToken => {
    const userData = await db
      .collection('UserList')
      .add({ freelancehuntToken: freelancehuntToken });
  },
  getDBuserMessage: async apiKey => {
    var data = [];
    const userData = await db
      .collection('UserList')
      .doc(apiKey)
      .collection('Messages')
      .get();
    userData.forEach(doc => {
      data.push(doc.data());
    });
    return data;
  },
  getDBuserOffer: async apiKey => {
    var data = [];
    const userData = await db
      .collection('UserList')
      .doc(apiKey)
      .collection('Offer')
      .get();
    userData.forEach(doc => {
      data.push(doc.data());
    });
    return data;
  },
  addDBuserMessage: async (apiKey, message_, id) => {
    let userData = await db
      .collection('UserList')
      .doc(apiKey)
      .collection('Messages')
      .add({ message: message_, id: id });
    return userData;
  },
  addDBuserOffer: async (apiKey, offer_, id) => {
    let userData = await db
      .collection('UserList')
      .doc(apiKey)
      .collection('Offer')
      .add({ offer: offer_, id: id });
    return userData;
  }
};