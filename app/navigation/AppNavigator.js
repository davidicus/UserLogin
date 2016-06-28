'use strict';
import React, { Component } from 'react';
import { Navigator, StyleSheet } from 'react-native';
// import styles from '../styles/styles.js';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';


class AppNavigator extends Component {

  _renderScene (route, navigator) {
    const globalNavigatorProps = { navigator };

    switch (route.ident) {
      case 'HomeScreen':
        return ( <HomeScreen {...globalNavigatorProps} /> )

      case 'LoginScreen':
        return ( <LoginScreen {...globalNavigatorProps} /> )

      case 'SignUpScreen':
        return ( <SignUpScreen {...globalNavigatorProps} /> )

      default:
        return (<LoginScreen {...globalNavigatorProps} />)
    }
  }

  render () {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        ref='appNavigator'
        style={styles.navigatorStyles}
        renderScene={this._renderScene}
        configureScene={(route) => ({
          ...route.screenConfig || Navigator.SceneConfigs.FloatFromRight })}
      />
    )
  }
}

const styles = StyleSheet.create({

});

module.exports = AppNavigator;
