import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Text, View } from "react-native";
import { RootStackParamList } from '../../types/types';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import styles from './styles';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { getUser, signUp } from '../../services/auth/auth';
import { useUserContext } from '../../context/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUpScreen() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
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

  const handleSubmit = async () => {
    const signUpResponse = await signUp({ email, password, username });
    if (signUpResponse.success) {
      const token = signUpResponse.token;
      AsyncStorage.setItem('@token', token);
      const userRes = await getUser(token);
      if (userRes.success) setUser(userRes.user);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <SignUpForm
        email={email}
        setEmail={setEmail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        passwordConfirmation={passwordConfirmation}
        setPasswordConfirmation={setPasswordConfirmation}
      />
      <PrimaryButton text="Sign Up" handlePress={handleSubmit} />
    </View>
  )
}