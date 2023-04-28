import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from "react-native";
import { RootStackParamList } from '../types/types';
import PrimaryButton from '../components/PrimaryButton';
import { signUpScreenStyles as styles } from '../styles/screens';
import SignUpForm from '../components/SignUpForm';

export default function SignUpScreen() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const signUp = () => {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <SignUpForm />
      <PrimaryButton text="Sign Up" handlePress={signUp} />
    </View>
  )
}