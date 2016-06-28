'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import ViewContainer from '../components/ViewContainer';
// import styles from '../styles/styles.js';

class HomeScreen extends Component {
  constructor (props) {
    super();
  }

  render () {
    return (
      <ViewContainer style={styles.home}>
        <TouchableOpacity>
          <Text style={styles.homeHeaderText}>Home Screen</Text>
        </TouchableOpacity>
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create ({
  //Home Screen Styles
  home: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 20,
    paddingTop: 40,
  },

  homeHeaderText: {
    color: 'coral',
  },
});

module.exports = HomeScreen;
