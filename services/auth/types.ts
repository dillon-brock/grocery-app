enum SuccessMessage {
  SignUp = 'Signed up and logged in successfully',
  SignIn = 'Signed in successfully'
}

export interface SuccessfulResponse {
  success: true
  message: SuccessMessage
}

export interface UserAuthData {
  email: string;
  password: string;
}

export interface UserSignUpData extends UserAuthData {
  username: string;
}