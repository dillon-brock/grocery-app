import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import styles from './styles';

type Props = {
  text: string;
  handlePress: () => void
}


export default function SecondaryButton({ text, handlePress }: Props) {

  const [pressed, setPressed] = useState<boolean>(false);

  

  return (
    <View style={styles.container}>
      <Pressable style={{ ...styles.button, backgroundColor: pressed ? '#E16A64' : 'transparent' }} 
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        onPress={handlePress}
      >
        <Text style={{ ...styles.buttonText, color: pressed ? 'rgb(243, 207, 198)' : '#E16A64' }}>
          {text}
        </Text>
      </Pressable>
    </View>
  )
}