import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Text, View } from "react-native";
import { RootStackParamList } from '../types/types';
import PrimaryButton from '../components/PrimaryButton';
import { loginScreenStyles as styles } from '../styles/screens';
import SignInForm from '../components/SignInForm';
import { useUserContext } from '../context/UserContext';

export default function LogInScreen() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { user, doneGettingUser } = useUserContext();

  useEffect(() => {
    if (user && doneGettingUser) {
      navigation.navigate('Home');
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    }
  })

  const login = () => {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <SignInForm />
      <PrimaryButton text="Log In" handlePress={login} />
    </View>
  )
}