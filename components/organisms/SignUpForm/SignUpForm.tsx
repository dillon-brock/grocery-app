import React, { useState } from "react";
import { View } from "react-native";
import Input from "../../atoms/Input/Input";
import styles from "./styles";
import { SignUpFormProps } from "../../../types/props";

export default function SignUpForm({
  email, setEmail,
  username, setUsername,
  password, setPassword,
  passwordConfirmation, setPasswordConfirmation
}: SignUpFormProps) {

  const [checkEmail, setCheckEmail] = useState<boolean>(false);
  const [checkPassword, setCheckPassword] = useState<boolean>(false);
  const [checkPasswordConfirmation, setCheckPasswordConfirmation] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Input 
      placeholder='Email'
      type='text'
      value={email}
      onChange={(e) => setEmail(e.nativeEvent.text)}
      onBlur={() => setCheckEmail(true)}
      isValid={!(checkEmail && (email.length <= 6 || !email.includes('@')))}/>
      <Input
        placeholder='Username'
        type='text'
        value={username}
        onChange={(e) => setUsername(e.nativeEvent.text)} />
      <Input
        placeholder='Password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.nativeEvent.text)}
        onBlur={() => setCheckPassword(true)}
        isValid={!(checkPassword && password.length < 6)} />
      <Input
        placeholder='Confirm password'
        type='password'
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.nativeEvent.text)}
        onBlur={() => setCheckPasswordConfirmation(true)}
        isValid={!checkPasswordConfirmation || passwordConfirmation == password} />
    </View>
  );
}