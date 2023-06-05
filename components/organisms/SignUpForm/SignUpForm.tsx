import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Input from "../../atoms/Input/Input";
import styles from "./styles";
import { SignUpFormProps } from "../../../types/props";
import ErrorText from "../../atoms/ErrorText/ErrorText";
import { useCheckForExistingUser } from "../../../hooks/useCheckForExistingUser";

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

  console.log(username);
  const userFound = useCheckForExistingUser(username);
  console.log(userFound);

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
      <Input 
      placeholder='Email'
      type='text'
      value={email}
      onChange={(e) => setEmail(e.nativeEvent.text)}
      onBlur={() => setCheckEmail(true)}
      isValid={emailIsValid}/>
      {emailError && <ErrorText text={emailError} size={14}/>}
      <Input
        placeholder='Username'
        type='text'
        value={username}
        onChange={(e) => setUsername(e.nativeEvent.text)}
        onBlur={handleBlurUsername}
        isValid={usernameIsValid} />
      {usernameError && <ErrorText text={usernameError} size={14} />}
      <Input
        placeholder='Password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.nativeEvent.text)}
        onBlur={() => setCheckPassword(true)}
        isValid={passwordIsValid} />
      {passwordError && <ErrorText text={passwordError} size={14} />}
      <Input
        placeholder='Confirm password'
        type='password'
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.nativeEvent.text)}
        onBlur={() => setCheckPasswordConfirmation(true)}
        isValid={passwordConfirmationIsValid} />
      {passwordConfirmationError && <ErrorText text={passwordConfirmationError} size={14} />}
    </View>
  );
}