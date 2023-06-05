import React, { useState } from "react";
import { View } from "react-native";
import styles from "./styles";
import { SignUpFormProps } from "../../../types/props";
import { useCheckForExistingUser } from "../../../hooks/formValidity/useCheckForExistingUser";
import FormGroup from "../../molecules/FormGroup/FormGroup";
import { useCheckNewEmail, useCheckNewPassword, useCheckPasswordConfirmation } from "../../../hooks/formValidity/useInputValidity";

export default function SignUpForm({
  email, setEmail,
  username, setUsername,
  password, setPassword,
  passwordConfirmation, setPasswordConfirmation
}: SignUpFormProps) {

  const [checkEmail, setCheckEmail] = useState<boolean>(false);
  const [checkPassword, setCheckPassword] = useState<boolean>(false);
  const [checkPasswordConfirmation, setCheckPasswordConfirmation] = useState<boolean>(false);
  
  const { emailIsValid, emailError } = useCheckNewEmail(checkEmail, email);
  const { passwordIsValid, passwordError } = useCheckNewPassword(checkPassword, password);
  const { 
    usernameIsValid, 
    setUsernameIsValid, 
    usernameError, 
    setUsernameError 
  } = useCheckForExistingUser(username);
  const { 
    passwordConfirmationIsValid, 
    passwordConfirmationError 
  }  = useCheckPasswordConfirmation(checkPasswordConfirmation, passwordConfirmation, password);

  const handleBlurUsername = () => {
    if (username === '') {
      setUsernameIsValid(false);
      setUsernameError('Username is required');
    }
  }

  return (
    <View style={styles.container}>
      <FormGroup
        placeholder="janedoe@email.com"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.nativeEvent.text)}
        onBlur={() => setCheckEmail(true)}
        isValid={emailIsValid}
        error={emailError} />
      <FormGroup
        placeholder="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.nativeEvent.text)}
        onBlur={handleBlurUsername}
        isValid={usernameIsValid}
        error={usernameError} />
      <FormGroup
        placeholder="******"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.nativeEvent.text)}
        onBlur={() => setCheckPassword(true)}
        isValid={passwordIsValid}
        error={passwordError} />
      <FormGroup
        placeholder="Confirm password"
        type="password"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.nativeEvent.text)}
        onBlur={() => setCheckPasswordConfirmation(true)}
        isValid={passwordConfirmationIsValid}
        error={passwordConfirmationError} />
    </View>
  );
}