import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ActivityIndicator,
  AsyncStorage,
  Navigator,
  Text,
  View
} from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import Login from './screens/forms/login';
import UserName from './screens/forms/username';
import Home from './screens/home';
import * as firebase from 'firebase';
var fireBaseconfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
const firebaseApp = firebase.initializeApp(fireBaseconfig);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class react_native_firebase_project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openingPage: null
    }
  }
  componentWillMount(){
    //Check if userData is stored on device else open Login
    AsyncStorage.getItem('userData').then((user_data_json) => {
      let user_data = JSON.parse(user_data_json);
      let openingPage = {openingPage: Login};
      if(user_data != null){
        this.setState({openingPage: Home});
      }else{
        this.setState(openingPage);
      }
    });
  }
  render() {
    if (this.state.openingPage) {
      return (
        <NavigationExperimental.Navigator
          initialRoute={{component: this.state.openingPage}}
          configureScene={() => {
            return NavigationExperimental.Navigator.SceneConfigs.PushFromRight;
          }}
          renderScene={(route, navigator) => {
            if (route.component) {
              return React.createElement(route.component, { navigator, firebaseApp });
            }
          }}
        />
      );
    } else {
      return (
        <View style={styles.container}>

        </View>
      );
    }
  }
}

AppRegistry.registerComponent('react_native_firebase_project', () => react_native_firebase_project);
