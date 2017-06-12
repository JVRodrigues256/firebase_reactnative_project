import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScreenI from './screenI';
import ScreenIII from './screenIII';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F8F8FF'
  },
  bottomNavigation: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 56
  }
});

export default class ScreenII extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BottomNavigation
          activeTab={0}
          labelColor="white"
          rippleColor="white"
          style={styles.bottomNavigation}
          onTabChange={this.handleTabChange}
        >
          <Tab
            barBackgroundColor="#F8F8FF"
            label="ScreenI"
            icon={<Icon size={24} color="white" name="dashboard" />}
          />
          <Tab
            barBackgroundColor="#F8F8FF"
            label="ScreenII"
            icon={<Icon size={24} color="white" name="dashboard" />}
          />
          <Tab
            barBackgroundColor="#F8F8FF"
            label="ScreenIII"
            icon={<Icon size={24} color="white" name="dashboard" />}
          />
        </BottomNavigation>
      </View>
    );
  }
}

AppRegistry.registerComponent('ScreenII', () => ScreenII);
