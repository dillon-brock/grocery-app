import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function DashboardScreen() {

  const [recipeButtonPressed, setRecipeButtonPressed] = useState<boolean>(false);
  const [listButtonPressed, setListButtonPressed] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={{
          backgroundColor: recipeButtonPressed ? 'white' : 'black',
          ...styles.button}}
          onPressIn={() => setRecipeButtonPressed(true)}
          onPressOut={() => setRecipeButtonPressed(false)}>
          <Text style={{
            color: recipeButtonPressed ? 'black' : 'white',
            ...styles.buttonText
            }}>My Recipes</Text>
        </Pressable>
        <Pressable style={{
          backgroundColor: listButtonPressed ? 'white' : 'black',
          ...styles.button}}
          onPressIn={() => setListButtonPressed(true)}
          onPressOut={() => setListButtonPressed(false)}>
          <Text style={{
            color: listButtonPressed ? 'black' : 'white',
            ...styles.buttonText
            }}>My List</Text>
        </Pressable>
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    borderWidth: 4,
    borderColor: 'black',
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  buttonContainer: {
    gap: 40
  }
})