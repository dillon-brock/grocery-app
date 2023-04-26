import React from "react";
import { StyleSheet, View } from "react-native";
import { AuthFormProps } from "../types/props";
import Input from "./Input";

export default function AuthForm({ method }: AuthFormProps) {

  return (
    <View style={styles.container}>
      <Input 
      placeholder={method == 'login' ? 'Email or username' : 'Email'}
      type='text' />
      <Input
        placeholder='Password'
        type='password' />
      {method == 'sign-up' &&
        <Input
          placeholder='Confirm password'
          type='password' />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    paddingTop: 80,
    gap: 40
  }
})