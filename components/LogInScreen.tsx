import React from 'react';
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import AuthForm from './AuthForm';

export default function LogInScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <AuthForm method='login' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'Avenir-Oblique'
  }
})