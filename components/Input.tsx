import React from "react";
import { TextInput } from "react-native";
import styles from '../styles/input';
import { InputProps } from "../types/props";

export default function Input({ placeholder, type }: InputProps) {
  return (
    <TextInput 
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={type != 'password'}
    />
  )
}