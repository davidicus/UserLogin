'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import ViewContainer from '../components/ViewContainer';
import styles from '../styles/Styles.js';

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



module.exports = HomeScreen;
