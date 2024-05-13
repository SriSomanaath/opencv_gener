import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Sreenath home Page!</Text>
      <StatusBar style='auto' />
      <Link href='/profile' style={{ color: 'blue'}}>Go to the profile</Link>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})