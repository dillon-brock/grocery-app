import React from "react";
import { View } from "react-native";
import Input from "./Input";
import styles from "../styles/authForm";

export default function SignUpForm() {

  return (
    <View style={styles.container}>
      <Input 
      placeholder='Email'
      type='text' />
      <Input
        placeholder='Username'
        type='text' />
      <Input
        placeholder='Password'
        type='password' />
      <Input
        placeholder='Confirm password'
        type='password' />
    </View>
  );
}