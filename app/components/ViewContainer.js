'use strict';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
// import styles from '../styles/styles.js';

class ViewContainer extends Component {
  render() {
    return (
      <View style={[styles.viewContainer, this.props.style || {}]}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
});

module.exports = ViewContainer
