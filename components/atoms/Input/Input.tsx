import React from "react";
import { TextInput } from "react-native";
import defaultStyles from './styles';
import { InputProps } from "../../../types/props";

export default function Input({ placeholder, type, value, onChange }: InputProps) {
  return (
    <TextInput 
      style={{ ...defaultStyles.input }}
      placeholder={placeholder}
      secureTextEntry={type == 'password'}
      value={value}
      onChange={onChange}
      keyboardType={type == 'number' ? 'numeric' : 'default'}
    />
  )
}