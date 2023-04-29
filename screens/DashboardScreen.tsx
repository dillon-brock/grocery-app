import React, { useEffect } from "react";
import { Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { dashboardScreenStyles as styles } from '../styles/screens'
import { useUserContext } from "../context/UserContext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { getUser, logOut } from "../services/auth/auth";
import { RootStackParamList } from "../types/types";

export default function DashboardScreen() {

  const { user, setUser, doneGettingUser } = useUserContext();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (!user && doneGettingUser) {
      navigation.navigate('Entry');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Entry' }]
      });
    }
  })

  const handleLogOut = async () => {
    // await logOut();
    // const userRes = await getUser();
    // if (userRes.success) 
    //   setUser(userRes.user);
    // else setUser(null);
  }

  return (
    <View style={styles.container}>
      <Text>{`Welcome, ${user?.username}`}</Text>
      <PrimaryButton text="Log Out" handlePress={handleLogOut} />
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton text="My Recipes" />
        <PrimaryButton text="My List" />
      </View>
    </View>
  );
}

