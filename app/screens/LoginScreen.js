'use strict';
import React, { Component } from 'react';
import { ActivityIndicator ,StyleSheet, Text, TextInput, View, TouchableHighlight, Navigator } from 'react-native';
import Firebase from 'firebase';
// import styles from '../styles/styles.js';
import firebaseUtils from '../utils/firebaseUtils';
import ViewContainer from '../components/ViewContainer';
import Button from '../components/Button';
import Header from '../components/Header';
import Spinner from 'react-native-loading-spinner-overlay';

import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon name="rocket" size={30} color="#900" />)

let app = new Firebase("https://usercreation.firebaseio.com");

class LoginScreen extends Component {
  constructor (props) {
    super(props);

    this.state = {
      loaded: true,
      email: '',
      password: ''
    };

  }

  render () {
   return (
    <ViewContainer style={styles.viewContainer}>

      <Text style={styles.loginHeading}>Sign Up</Text>
      <TextInput
        onChangeText={ (text)=> this.setState({email: text}) }
        style={styles.loginInput}
        placeholder="Email"
        value={this.state.email}>
      </TextInput>
      <TextInput
        onChangeText={ (text)=> this.setState({password: text}) }
        style={styles.loginInput}
        placeholder="Password"
        value={this.state.password}
        secureTextEntry={true}>
      </TextInput>
      <Button
        text="Signup"
        onPress={this._signup.bind(this)}
        button_styles={styles.loginButton}
        button_text_styles={styles.loginButtonText}
      />
      { myIcon }
      <Button
        text="Got an Account?"
        onPress={this._goToLogin.bind(this)}
        button_styles={styles.transparentLoginButton}
        button_text_styles={styles.transparentLoginButtonText}
      />

      <Text style={styles.loginError}> {this.state.error} </Text>
      {  !this.state.loaded &&
          <ActivityIndicator animating={!this.state.loaded} size="large" style={styles.loginLoader} />
      }
    </ViewContainer>
   );
  }

  _goToLogin (){
    this.props.navigator.push({
      component: LoginScreen
    });
  }

  _signup () {
    this.setState({
      loaded: false
    });
    app.createUser({
      'email': this.state.email,
      'password': this.state.password
    }, (error, userData) => {
      if(error){
        switch(error.code){

          case "EMAIL_TAKEN":
            alert("The new user account cannot be created because the email is already in use.");
          break;

          case "INVALID_EMAIL":
            alert("The specified email is not a valid email.");
          break;

          default:
            alert("There has been in error updating an account: "+JSON.stringify(error));
            console.error(error);
        }

      } else {
        alert('Your account was created!');
        app.authWithPassword({
          email: this.state.email,
          password: this.state.password
        }, function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);
            var key = authData.uid;
            app.child('user').child(key).set(authData);
          }
        })

        //
      }

      this.setState({
        email: '',
        password: '',
        loaded: true
      });
      this._navigateToHome();
    });
  }

  _navigateToHome () {
   this.props.navigator.push({
     ident: 'HomeScreen',
   })
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 20,
    paddingTop: 40,
  },

  loginHeading: {
    fontSize: 20,
  },

  loginInput: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec'
  },

  loginButton: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },

  loginButtonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },

  transparentLoginButton: {
    height: 50,
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },

  transparentLoginButtonText: {
    fontSize: 22,
    color: '#555',
    alignSelf: 'center'
  },

  loginError: {
    color: 'red',
    paddingTop: 10
  },

  loginLoader: {
    marginTop: 20
  },
});

module.exports = LoginScreen;
