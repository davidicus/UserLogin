'use strict';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet} from 'react-native';
import AppNavigator from './app/navigation/AppNavigator'
// import styles from './app/styles/styles.js';

class UserLogin extends Component {
  constructor (props) {
    super (props);
    this.state = {
      loggedIn: false,
      userId: ""
    }
  }

  render () {
    if (this.state.loggedIn) {
      return (
        <AppNavigator initialRoute={{ident: 'HomeScreen'}} />
      );
    } else {
      return (
        <AppNavigator initialRoute={{ident: 'LoginScreen'}} />
      );
    }
  }
}

AppRegistry.registerComponent('UserLogin', () => UserLogin);
