import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 60,
    paddingBottom: 60
  },
  title: {
    fontSize: 30,
    fontFamily: 'Avenir-Oblique'
  },
  buttonContainer: {
    gap: 40
  }
})