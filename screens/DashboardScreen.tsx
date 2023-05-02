import React from "react";
import { Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { dashboardScreenStyles as styles } from '../styles/screens'
import { useUserContext } from "../context/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCheckForLogOut } from "../hooks/useCheckForLogOut";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../types/types";

export default function DashboardScreen() {

  const { user, setUser } = useUserContext();
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  useCheckForLogOut();

  const handleLogOut = async () => {
    await AsyncStorage.removeItem('@token');
    setUser(null);
  }

  return (
    <View style={styles.container}>
      <Text>{`Welcome, ${user?.username}`}</Text>
      <PrimaryButton text="Log Out" handlePress={handleLogOut} />
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton text="My Recipes" />
        <PrimaryButton 
          text="My Lists"
          handlePress={() => navigation.navigate('Lists')} />
      </View>
    </View>
  );
}

