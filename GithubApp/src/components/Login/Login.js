import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component{
	render(){
		return(
			<KeyboardAvoidingView behaviour="padding" style={styles.container}>
				<View style={styles.logoContainer}>
        <Image
        style = {styles.logo}
          source={require('../../images/Octocat.png')}
        />
				<Text style={styles.title}> An app made for Github using React Native </Text>
				</View>
				<View style={styles.formContainer}>
          <LoginForm />
				</View>

			</KeyboardAvoidingView>
			);
	}
}

const styles = StyleSheet.create({
	wrapper: {
    flex: 1,
	  backgroundColor: '#3498db',
	},
	logoContainer:{
  	alignItems: 'center',
  	flexGrow: 1,
  	justifyContent: 'center'
	},
	title:{
  	color: '#FFF',
  	marginTop: 10,
  	width: 160,
  	textAlign: 'center',
  	opacity: 0.9
	},
	logo: {
  	width: 100,
  	height: 100
	}
});
