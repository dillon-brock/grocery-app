import React from "react";
import { Text, View } from "react-native";
import PrimaryButton from "../../components/atoms/buttons/PrimaryButton/PrimaryButton";
import styles from './styles';
import { useUserContext } from "../../context/UserContext";
import { useCheckForLogOut } from "../../hooks/useCheckForLogOut";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../types/types";
import { useMenuContext } from "../../context/MenuContext";
import Menu from "../../components/organisms/Menu/Menu";
import Header from "../../components/molecules/Header/Header";
import ScreenTitle from "../../components/atoms/ScreenTitle/Title";

export default function DashboardScreen() {

  const { user } = useUserContext();
  const { menuOpen } = useMenuContext();
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  useCheckForLogOut();

  return (
    <>
      <Header 
        showBackButton={false}
        showMenuButton
      />
      {menuOpen && <Menu />}
      <View style={styles.container}>
        <Text>{`Welcome, ${user?.username}`}</Text>
        <ScreenTitle text="Dashboard" color="black" />
        <View style={styles.buttonContainer}>
          <PrimaryButton text="My Recipes"
            handlePress={() => navigation.navigate('RecipeStack', { screen: 'Recipes' })} />
          <PrimaryButton 
            text="My Lists"
            handlePress={() => navigation.navigate('ListStack', { screen: 'Lists' })} />
          <PrimaryButton
            text="Meal Plans"
            handlePress={() => navigation.navigate('Meal Plans')} />
        </View>
      </View>
    </>
  );
}

