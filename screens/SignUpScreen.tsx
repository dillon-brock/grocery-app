import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from "react-native";
import { RootStackParamList } from '../types/types';
import AuthForm from '../components/AuthForm';
import PrimaryButton from '../components/PrimaryButton';
import { signUpScreenStyles as styles } from '../styles/screens';

export default function SignUpScreen() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const signUp = () => {
    navigation.navigate('Dashboard');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }]
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <AuthForm method='sign-up' />
      <PrimaryButton text="Sign Up" handlePress={signUp} />
    </View>
  )
}