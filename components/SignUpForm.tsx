import React from "react";
import { View } from "react-native";
import Input from "./Input";
import styles from "../styles/authForm";
import { SignUpFormProps } from "../types/props";

export default function SignUpForm({
  email, setEmail,
  username, setUsername,
  password, setPassword,
  passwordConfirmation, setPasswordConfirmation
}: SignUpFormProps) {

  return (
    <View style={styles.container}>
      <Input 
      placeholder='Email'
      type='text'
      value={email}
      onChange={(e) => setEmail(e.nativeEvent.text)} />
      <Input
        placeholder='Username'
        type='text'
        value={username}
        onChange={(e) => setUsername(e.nativeEvent.text)} />
      <Input
        placeholder='Password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.nativeEvent.text)} />
      <Input
        placeholder='Confirm password'
        type='password'
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.nativeEvent.text)} />
    </View>
  );
}