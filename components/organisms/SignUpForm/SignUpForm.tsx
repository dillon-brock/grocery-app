import React, { useEffect, useState } from "react";
import { View } from "react-native";
import styles from "./styles";
import { SignUpFormProps } from "../../../types/props";
import { useCheckForExistingUser } from "../../../hooks/formValidity/useCheckForExistingUser";
import FormGroup from "../../molecules/FormGroup/FormGroup";

export default function SignUpForm({
  email, setEmail,
  username, setUsername,
  password, setPassword,
  passwordConfirmation, setPasswordConfirmation
}: SignUpFormProps) {

  const [checkEmail, setCheckEmail] = useState<boolean>(false);
  const [checkPassword, setCheckPassword] = useState<boolean>(false);
  const [checkPasswordConfirmation, setCheckPasswordConfirmation] = useState<boolean>(false);
  const [emailIsValid, setEmailIsValid] = useState<boolean>(true);
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(true);
  const [passwordConfirmationIsValid, setPasswordConfirmationIsValid] = useState<boolean>(true);
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [passwordConfirmationError, setPasswordConfirmationError] = useState<string>('');

  const { usernameIsValid, setUsernameIsValid, usernameError, setUsernameError } = useCheckForExistingUser(username);

  useEffect(() => {
    setEmailIsValid(!checkEmail || (email.length > 6 && email.includes('@')));
    if (checkEmail && !(email.length > 6 && email.includes('@'))) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  }, [email, checkEmail]);

  useEffect(() => {
    setPasswordIsValid(!checkPassword || (password.length >= 6));
    if (checkPassword && !(password.length >= 6)) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
  }, [password, checkPassword]);

  useEffect(() => {
    setPasswordConfirmationIsValid(!checkPasswordConfirmation || passwordConfirmation == password);
    if (checkPasswordConfirmation && passwordConfirmation != password) {
      setPasswordConfirmationError('Passwords do not match');
    } else {
      setPasswordConfirmationError('');
    }
  }, [passwordConfirmation, checkPasswordConfirmation]);

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