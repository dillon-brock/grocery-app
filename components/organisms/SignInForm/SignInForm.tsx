import React from "react";
import { View } from "react-native";
import Input from "../../atoms/Input/Input";
import { SignInFormProps } from "../../../types/props";

export default function SignInForm({
  email, setEmail,
  password, setPassword
}: SignInFormProps) {
  
  return (
    <View>
      <Input 
      placeholder='Email'
      type='text'
      value={email}
      onChange={(e) => setEmail(e.nativeEvent.text)} />
      <Input
        placeholder='Password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.nativeEvent.text)} />
    </View>
  );
}