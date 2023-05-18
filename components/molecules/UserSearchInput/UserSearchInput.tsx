import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { NativeSyntheticEvent, TextInputChangeEventData, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from './styles'

type Props = {
  value: string;
  handleChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void
}


export default function UserSearchInput({ value, handleChange }: Props) {
  return (
    <View style={styles.container}>
      <Ionicons name='search-outline' size={25} />
      <TextInput
        style={[styles.inputView, styles.inputText]}
        placeholder="Find users"
        value={value}
        onChange={handleChange}
      />
    </View>
  )
}