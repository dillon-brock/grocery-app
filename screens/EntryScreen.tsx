import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import PrimaryButton from '../components/PrimaryButton';

export default function EntryScreen() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const navigateToLogin = () => {
    navigation.navigate('Login');
  }

  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grocery App</Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton text="Log In" handlePress={navigateToLogin} />
        <PrimaryButton text="Sign Up" handlePress={navigateToSignUp} />
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
  }
});
