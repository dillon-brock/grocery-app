import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { AuthFormProps } from "../types/props";

export default function AuthForm({ method }: AuthFormProps) {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const [submitPressed, setSubmitPressed] = useState<boolean>(false);

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
      <Pressable 
          onPressIn={() => setSubmitPressed(true)}
          onPressOut={() => setSubmitPressed(false)}
          style={{backgroundColor: submitPressed ? "white" : "black", ...styles.button}}>
          <Text style={{color: submitPressed ? "black" : "white", ...styles.buttonText}}>
            {method == 'login' ? 'Log In' : 'Sign Up'}
          </Text>
      </Pressable>
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