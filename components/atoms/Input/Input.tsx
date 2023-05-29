import React from "react";
import { TextInput } from "react-native";
import defaultStyles from './styles';
import { InputProps } from "../../../types/props";

export default function Input({ placeholder, type, value, onChange, isValid, onBlur }: InputProps) {
  return (
    <TextInput 
      style={[defaultStyles.input, (isValid === false) && { borderColor: 'red' }]}
      placeholder={placeholder}
      secureTextEntry={type == 'password'}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      keyboardType={type == 'number' ? 'numeric' : 'default'}
    />
  )
}

