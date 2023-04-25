import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from "react-native";
import { LoginScreenProps } from '../types/props';
import AuthForm from './AuthForm';

export default function LogInScreen({ navigation }: LoginScreenProps) {

  const [loginPressed, setLoginPressed] = useState<boolean>(false);

  const login = () => {
    setLoginPressed(false);
    navigation.navigate('Dashboard');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <AuthForm method='login' />
      <Pressable 
          onPressIn={() => setLoginPressed(true)}
          onPressOut={login}
          style={{backgroundColor: loginPressed ? "white" : "black", ...styles.button}}>
          <Text style={{color: loginPressed ? "black" : "white", ...styles.buttonText}}>
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