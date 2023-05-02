import React from "react";
import { Text, View } from "react-native";
import PrimaryButton from "../../components/buttons/PrimaryButton/PrimaryButton";
import styles from './styles';
import { useUserContext } from "../../context/UserContext";
import { useCheckForLogOut } from "../../hooks/useCheckForLogOut";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../types/types";
import { useMenuContext } from "../../context/MenuContext";
import Menu from "../../components/menu-elements/Menu/Menu";

export default function DashboardScreen() {

  const { user } = useUserContext();
  const { menuOpen } = useMenuContext();
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  useCheckForLogOut();

  return (
    <>
      {menuOpen && <Menu />}
      <View style={styles.container}>
        <Text>{`Welcome, ${user?.username}`}</Text>
        <Text style={styles.title}>Dashboard</Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton text="My Recipes" />
          <PrimaryButton 
            text="My Lists"
            handlePress={() => navigation.navigate('ListStack', { screen: 'Lists' })} />
        </View>
      </View>
    </>
  );
}

