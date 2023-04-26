import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import PrimaryButton from '../components/PrimaryButton';
import { entryScreenStyles as styles } from '../styles/screens';

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
