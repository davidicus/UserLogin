'use strict';
import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

class Button extends Component {
  render(){
    return (
      <TouchableHighlight underlayColor={"#E8E8E8"} onPress={this.props.onPress} style={this.props.button_styles}>
        <View>
            <Text style={this.props.button_text_styles}>{this.props.text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = Button;
