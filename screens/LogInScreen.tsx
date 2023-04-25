import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from '../types/types';
import AuthForm from '../components/AuthForm';
import PrimaryButton from '../components/PrimaryButton';

export default function LogInScreen() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const login = () => {
    navigation.navigate('Dashboard');
    navigation.reset({ 
      index: 0, 
      routes: [{ name: 'Dashboard' }]
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <AuthForm method='login' />
      <PrimaryButton text="Log In" handlePress={login} />
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
  }
})