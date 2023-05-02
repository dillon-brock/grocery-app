import React from "react";
import { TextInput } from "react-native";
import styles from '../../styles/input';
import { InputProps } from "../../types/props";

export default function Input({ placeholder, type, value, onChange }: InputProps) {
  return (
    <TextInput 
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={type == 'password'}
      value={value}
      onChange={onChange}
    />
  )
}