import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from '../types/types';
import AuthForm from './AuthForm';

export default function SignUpScreen() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [signUpPressed, setSignUpPressed] = useState<boolean>(false);

  const signUp = () => {
    setSignUpPressed(false);
    navigation.navigate('Dashboard');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }]
    });
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