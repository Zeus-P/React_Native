import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import firebase from 'firebase';

class App extends React.Component{
	ComponentWillMount(){


  var config = {
    apiKey: "AIzaSyDybUwB6izxdtXj0JvdAPdYNs3b9hvzgMw",
    authDomain: "user-57404.firebaseapp.com",
    databaseURL: "https://user-57404.firebaseio.com",
    projectId: "user-57404",
    storageBucket: "",
    messagingSenderId: "1003370851826"
  };
  firebase.initializeApp(config);
	}
}

firebase.database()ref('users/001').set(
{
	name:'kajal',
	age:20
}
).then(()=> {
	console.log('INSERTED !');

}).catch((error)=>{
	console.log('error');
});


render{
	return(
             <View style={styles.container}>
             <Text> welcome to firebase</Text>
             </View>
		);
}