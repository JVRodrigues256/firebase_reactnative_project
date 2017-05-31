import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules,
  TouchableOpacity,
  TouchableNativeFeedback,
  ActivityIndicator,
  Dimensions,
  TextInput,
} from 'react-native';
import * as firebase from 'firebase';
import HomePage from '../homepage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#f8f8ff'
  },
  containerAll: {
    marginTop: -11,
    alignItems: 'center'
  },
  containerPosition: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 55,
    width: Dimensions.get("window").width - 44,
    padding: 6,
    borderStyle: 'solid',
    fontFamily: 'normal',
    fontSize: 20.8,
    color: '#151515'
  },
});

export default class UserName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      username: ''
    }
  }
  savename() {
    this.setState({
      loading: true
    });
    update() {
      database().ref(`/users/${uid}`).update(newData);
      this.setState({
        nickname: '',
        loading: false
      });
      this.props.navigator.push({
        component: HomePage
      });
    }.catch((error) => {
      this.setState({
        loading: false
      });
      alert("Erro!");
    });
  }
  render() {
    const { username } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.containerAll}>
          <View style={styles.containerPosition}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                autoFocus={false}
                multiline={false}
                autoCapitalize="words"
                secureTextEntry={false}
                keyboardType="default"
                underlineColorAndroid="#555555"
                placeholder="Insira um nome"
                autoCorrect={false}
                returnKeyType="done"
                onChangeText={(text) => this.setState({ username: text })}
                value={this.state.username}
              />
            </View>
          </View>
        </View>
        <View style={{position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-end', left: 0, top: 0, bottom: 25, right: 25}}>
          <TouchableNativeFeedback
            disabled={!username}
            onPress={this.savename.bind(this)}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={{height: 45, width: 85, borderRadius: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 22.5, color: '#000000', textAlign: 'center'}}>Ir</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('UserName', () => UserName);
