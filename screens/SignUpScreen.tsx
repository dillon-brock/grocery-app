import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Text, View } from "react-native";
import { RootStackParamList } from '../types/types';
import PrimaryButton from '../components/PrimaryButton';
import { signUpScreenStyles as styles } from '../styles/screens';
import SignUpForm from '../components/SignUpForm';
import { signUp } from '../services/auth/auth';
import { useUserContext } from '../context/UserContext';

export default function SignUpScreen() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const { user, doneGettingUser } = useUserContext();

  if (user && doneGettingUser) {
    navigation.navigate('Home');
  }

  const handleSubmit = async () => {
    const signUpResponse = await signUp({ email, password, username });
    if (signUpResponse.success) {
      navigation.navigate('Home');
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
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