import React from "react";
import { Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { dashboardScreenStyles as styles } from '../styles/screens'
import { useUserContext } from "../context/UserContext";
// import { useNavigation } from "@react-navigation/native";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { HomeStackParamList } from "../types/types";
import { getUser, logOut } from "../services/auth/auth";

export default function DashboardScreen() {

  const { setUser } = useUserContext();
  // const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const handleLogOut = async () => {
    await logOut();
    const userRes = await getUser();
    if (userRes.success) 
      setUser(userRes.user);
    else setUser(null);
  }

  return (
    <View style={styles.container}>
      <PrimaryButton text="Log Out" handlePress={handleLogOut} />
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton text="My Recipes" />
        <PrimaryButton text="My List" />
      </View>
    </View>
  );
}

