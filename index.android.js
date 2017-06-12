import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import ScreenI from './screens/screenI';
import ScreenII from './screens/screenII';
import ScreenIII from './screens/screenIII';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class WakeUp extends Component {
  render() {
    return (
      <NavigationExperimental.Navigator
        initialRoute={{id: 'ScreenI', name: 'index'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return NavigationExperimental.Navigator.SceneConfigs.PushFromRight;
        }}
      />
    );
  }
  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'ScreenI') {
      return (
        <ScreenI
          navigator={navigator}
        />
      );
    }
    if (routeId === 'ScreenII') {
      return (
        <ScreenII
          navigator={navigator}
        />
      );
    }
    if (routeId === 'ScreenIII') {
      return (
        <ScreenIII
          navigator={navigator}
        />
      );
    }
    return this.noRoute(navigator);
  }
}

AppRegistry.registerComponent('react_native_firebase_project', () => react_native_firebase_project);
