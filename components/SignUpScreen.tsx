import React from 'react';
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SignUpScreenProps } from '../types/props';
import AuthForm from './AuthForm';

export default function SignUpScreen({ navigation }: SignUpScreenProps) {

  const [signUpPressed, setSignUpPressed] = useState<boolean>(false);

  const signUp = () => {
    setSignUpPressed(false);
    navigation.navigate('Dashboard');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <AuthForm method='sign-up' />
      <Pressable 
          onPressIn={() => setSignUpPressed(true)}
          onPressOut={signUp}
          style={{backgroundColor: signUpPressed ? "white" : "black", ...styles.button}}>
          <Text style={{color: signUpPressed ? "black" : "white", ...styles.buttonText}}>
            Log In
          </Text>
      </Pressable>
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
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    borderWidth: 4,
    borderColor: 'black',
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  }
})