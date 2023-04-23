import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        placeholder={'Email or username'}
        value={email}
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        value={password}
        placeholder={'Password'}
        onChangeText={setPassword}
      />
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
  input: {
    height: 40,
    width: 220,
    margin: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
  },
})