import React from "react";
import { Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { dashboardScreenStyles as styles } from '../styles/screens'

export default function DashboardScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton text="My Recipes" />
        <PrimaryButton text="My List" />
      </View>
    </View>
  );
}

