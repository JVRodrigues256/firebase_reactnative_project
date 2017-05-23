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
import UserName from './username';
import Home from '../home';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#38cdff',
  },
  containerPosition: {
    alignItems: 'center',
    bottom: 18,
  },
  inputContainer: {
    bottom: 13,
  },
  inputContainerII: {
    top: 13,
  },
});

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: '',
      password: ''
    }
  }
  signup() {
    this.setState({
      // When waiting for the firebase server show the loading indicator.
      loading: true
    });
    // Make a call to firebase to create a new user.
    this.props.firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(() => {
      // then and catch are methods that we call on the Promise returned from
      // createUserWithEmailAndPassword
      alert('Sua conta foi criada! Agora, construa o seu perfil.');
      this.setState({
        // Clear out the fields when the user logs in and hide the progress indicator.
        email: '',
        password: '',
        loading: false
      });
      this.props.navigator.push({
        component: UserName
      });
    }).catch((error) => {
      // Leave the fields filled when an error occurs and hide the progress indicator.
      this.setState({
        loading: false
      });
      alert("Falha na criação da conta. Tente novamente!");
    });
  }
  _handlePress() {
    console.log('Pressed!');
  }
  render() {
    const { email, password } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.containerPosition}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              autoCapitalize="none"
              multiline={false}
              underlineColorAndroid="#555555"
              autoCorrect={false}
              secureTextEntry={false}
              returnKeyType="next"
              keyboardType="email-address"
              onChangeText={(text) => this.setState({ email: text })}
              value={this.state.email}
              style={{padding: 6, height: 55, width: Dimensions.get("window").width - 44, color: '#7A7A7A', fontFamily: 'normal', fontSize: 21}}
              onSubmitEditing={() => this._passwordRef.focus()}
            />
          </View>
          <View style={styles.inputContainerII}>
            <TextInput
              ref={(ref) => this._passwordRef = ref}
              placeholder="Senha"
              autoCapitalize="none"
              multiline={false}
              underlineColorAndroid="#555555"
              autoCorrect={false}
              keyboardType="default"
              secureTextEntry={true}
              onChangeText={(text) => this.setState({ password: text })}
              value={this.state.password}
              returnKeyType="done"
              style={{padding: 6, height: 55, width: Dimensions.get("window").width - 44, color: '#7A7A7A', fontFamily: 'normal', fontSize: 21}}
            />
          </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', top: 13}}>
          <TouchableNativeFeedback
            disabled={!email || !password}
            onPress={this.login.bind(this)}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={{width: Dimensions.get("window").width - 90, backgroundColor: '#006bff', borderRadius: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 23, color: '#000000', textAlign: 'center'}}>ENTRAR</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            disabled={!email || !password}
            onPress={this.signup.bind(this)}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={{width: Dimensions.get("window").width - 90, backgroundColor: '#006bff', borderRadius: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 23, color: '#000000', textAlign: 'center'}}>CRIAR CONTA</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
  login(){
    this.setState({
      loading: true
    });
    // Log in and display an alert to tell the user what happened.
    this.props.firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((userData) =>
      {
        this.setState({
          loading: false
        });
        AsyncStorage.setItem('userData', JSON.stringify(userData));
        this.props.navigator.push({
          component: Home
        });
      }
    ).catch((error) =>
        {
      this.setState({
        loading: false
      });
      alert('Falha no login. Por favor, tente novamente!');
    });
  }
}

AppRegistry.registerComponent('login', () => login);
