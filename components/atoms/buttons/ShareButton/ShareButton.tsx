import React from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";

type Props = {
  goToShareScreen: () => void;
}

export default function ShareButton({ goToShareScreen }: Props) {
  
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={goToShareScreen}>
        <Text style={styles.buttonText}>Share</Text>
      </Pressable>
    </View>
  )
}