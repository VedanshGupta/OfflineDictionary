import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import dictionary from '../localdb';

export default function App() {
  return (
    <View>
      <HomeScreen />
    </View>
  )
}