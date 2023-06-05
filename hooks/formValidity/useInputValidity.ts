import { Dispatch, SetStateAction, useEffect, useState } from "react";

type EmailValidityState = {
  emailIsValid: boolean;
  emailError: string;
  setEmailError: Dispatch<SetStateAction<string>>;
}

export function useCheckNewEmail(checkEmail: boolean, email: string): EmailValidityState {

  const [emailIsValid, setEmailIsValid] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>('');

  useEffect(() => {
    setEmailIsValid(!checkEmail || (email.length > 6 && email.includes('@')));
    if (checkEmail && !(email.length > 6 && email.includes('@'))) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  }, [checkEmail, email])

  return { emailIsValid, emailError, setEmailError };
}

type PasswordValidityState = {
  passwordIsValid: boolean;
  passwordError: string;
}

export function useCheckNewPassword(checkPassword: boolean, password: string): PasswordValidityState {

  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(true);
  const [passwordError, setPasswordError] = useState<string>('');

  useEffect(() => {
    setPasswordIsValid(!checkPassword || (password.length >= 6));
    if (checkPassword && !(password.length >= 6)) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
  }, [password, checkPassword]);

  return { passwordIsValid, passwordError };
}

type PasswordConfirmationValidityState = {
  passwordConfirmationIsValid: boolean;
  passwordConfirmationError: string;
}

export function useCheckPasswordConfirmation(checkPasswordConfirmation: boolean, passwordConfirmation: string, password: string): PasswordConfirmationValidityState {

  const [passwordConfirmationIsValid, setPasswordConfirmationIsValid] = useState<boolean>(true);
  const [passwordConfirmationError, setPasswordConfirmationError] = useState<string>('');

  useEffect(() => {
    const valid = !checkPasswordConfirmation || passwordConfirmation == password;
    setPasswordConfirmationIsValid(valid);
    if (!valid) {
      setPasswordConfirmationError('Passwords do not match');
    } else {
      setPasswordConfirmationError('');
    }
  }, [passwordConfirmation, password, checkPasswordConfirmation]);

  return { passwordConfirmationIsValid, passwordConfirmationError };
}