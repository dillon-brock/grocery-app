import React from "react";
import { NativeSyntheticEvent, TextInputChangeEventData, View } from "react-native";
import Input from "../../atoms/Input/Input";
import ErrorText from "../../atoms/ErrorText/ErrorText";

type Props = {
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onBlur: () => void;
  isValid: boolean;
  error: string;
}

export default function FormGroup({ placeholder, type, value, onChange, onBlur, isValid, error }: Props) {

  return (
    <View>
      <Input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        isValid={isValid} />
        {!isValid && <ErrorText text={error} size={14} />}
    </View>
  )
}