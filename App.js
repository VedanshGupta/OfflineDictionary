import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import dictionary from '../localdb';

export default class App extends Component{
	render(){
	  return (
	    <View>
	      <HomeScreen />
	    </View>
	  )
}
}
