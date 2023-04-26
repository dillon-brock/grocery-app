import React from "react";
import { View } from "react-native";
import { AuthFormProps } from "../types/props";
import Input from "./Input";
import styles from "../styles/authForm";

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