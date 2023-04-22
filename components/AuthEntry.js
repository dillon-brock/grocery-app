import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';


export default function AuthEntry({ navigation }) {

  const [logInPressed, setLogInPressed] = useState(false);
  const [signUpPressed, setSignUpPressed] = useState(false);

  const login = () => {
    setLogInPressed(false);
    navigation.navigate('Login');
  }

  const signUp = () => {
    setSignUpPressed(false);
    navigation.navigate('Sign Up');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grocery App</Text>
      <View style={styles.buttonContainer}>
        <Pressable 
          onPressIn={() => setLogInPressed(true)}
          onPressOut={login}
          style={{backgroundColor: logInPressed ? "white" : "black", ...styles.button}}>
          <Text style={{color: logInPressed ? "black" : "white", ...styles.buttonText}}>Log In</Text>
        </Pressable>
        <Pressable 
          onPressIn={() => setSignUpPressed(true)}
          onPressOut={signUp}
          style={{backgroundColor: signUpPressed ? "white" : "black", ...styles.button}}>
          <Text style={{color: signUpPressed ? "black" : "white", ...styles.buttonText}}>Sign Up</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 60
  },
  title: {
    fontSize: 50,
    fontFamily: 'Avenir-Oblique'
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
  },
});
