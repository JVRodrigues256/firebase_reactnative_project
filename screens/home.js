import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  NativeModules,
  Dimensions,
  Image,
  Alert,
  ScrollView,
  TouchableNativeFeedback,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage,
  View
} from 'react-native';
import Login from './forms/login';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8ff',
  },
});

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:null,
      loaded: false,
    }
  }
  componentWillMount() {
    // get the current user from firebase
    // const userData = this.props.firebaseApp.auth().currentUser;
    AsyncStorage.getItem('userData').then((user_data_json) => {
      let userData = JSON.parse(user_data_json);
      this.setState({
        user: userData,
        loading: false
      });
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Olá, usuário!</Text>
        <TouchableNativeFeedback
          onPress={this.logout.bind(this)}
          background={TouchableNativeFeedback.SelectableBackground()}>
          <View>
            <Text style={{fontSize: 18, padding: 10}}>Sair</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
  logout() {
    // logout, once that is complete, return the user to the login screen.
    AsyncStorage.removeItem('userData').then(() => {
      this.props.firebaseApp.auth().signOut().then(() => {
        this.props.navigator.pop({
          component: Login
        });
      });
    });
  }
}

AppRegistry.registerComponent('Home', () => Home);
