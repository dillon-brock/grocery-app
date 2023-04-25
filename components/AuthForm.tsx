import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { AuthFormProps } from "../types/props";

export default function AuthForm({ method }: AuthFormProps) {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder='Email or username'
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholder='Password'
      />
      {method == 'sign-up' &&
        <TextInput
          style={styles.input}
          secureTextEntry
          value={passwordConfirmation}
          onChangeText={setPasswordConfirmation}
          placeholder='Confirm password'
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 220,
    margin: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
  },
  buttonContainer: {
    paddingTop: 80,
    gap: 40
  }
})