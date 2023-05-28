import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { View } from "react-native";
import { RootStackParamList } from '../../types/types';
import PrimaryButton from '../../components/atoms/buttons/PrimaryButton/PrimaryButton';
import styles from './styles';
import SignInForm from '../../components/organisms/SignInForm/SignInForm';
import { useUserContext } from '../../context/UserContext';
import { getUser, signIn } from '../../services/auth/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/molecules/Header/Header';
import ScreenTitle from '../../components/atoms/ScreenTitle/Title';
import ErrorText from '../../components/atoms/ErrorText/ErrorText';

export default function LogInScreen() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { user, setUser, doneGettingUser } = useUserContext();

  useEffect(() => {
    if (user && doneGettingUser) {
      navigation.navigate('Home');
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    }
  })

  const handleLogin = async () => {
    const signInResponse = await signIn({ email, password });
    if (signInResponse.success) {
      const token = signInResponse.token;
      AsyncStorage.setItem('@token', token);
      const userRes = await getUser(token);
      if (userRes.success) setUser(userRes.user);
    }
    else {
      if (signInResponse.status == 400) {
        setError('Email and password do not match. Please check your login information and try again.');
      }
      else {
        setError('Something went wrong. Please try again. If the error persists, please try quitting and reopening the app.')
      }
    }
  }

  return (
    <>
      <Header
        showBackButton
        showMenuButton={false}
      />
      <View style={styles.container}>
        <ScreenTitle text='Log In' color='#E16A64' />
        <SignInForm 
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword} />
        <ErrorText text={error} />
        <PrimaryButton text="Log In" handlePress={handleLogin} />
      </View>
    </>
  )
}