'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Header extends Component {

  render (){
    const myIcon = (<Icon name={this.props.image} size={25} color="#555" />)
    return (
      <View style={styles.header}>
        <View style={styles.header_item}>
          {myIcon}
        </View>
        <View style={styles.header_item}>
          <Text style={styles.header_text}>{this.props.text}</Text>
        </View>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  header_item: {
    paddingLeft: 10,
    paddingRight: 5
  },
  header_text: {
    color: '#000',
    fontSize: 20
  }
});

module.exports = Header;
