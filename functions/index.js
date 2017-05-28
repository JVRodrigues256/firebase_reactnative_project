var functions = require('firebase-functions');

exports.setupUserData = functions.auth.user().onCreate(event => {
  'use strict'
  const uid = event.data.uid
  return admin.database().ref(`/users/${uid}`).update(userInitialData)
});
