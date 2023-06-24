import React from "react";
import Header from "../../components/molecules/Header/Header";
import { View } from "react-native";
import ScreenTitle from "../../components/atoms/ScreenTitle/Title";

export default function MealPlansScreen() {
  return (
    <>
      <Header showBackButton showMenuButton />
      <View>
        <ScreenTitle text="Meal Plans" color="black" />
      </View>
    </>
  )
}