export type RootStackParamList = {
  Entry: undefined;
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
};

export type HomeStackParamList = {
  Dashboard: undefined;
  List: undefined;
  Recipes: undefined;
}

export type DatabaseErrorResponse = {
  message: string;
  status: number;
  success: false;
}

enum SuccessMessage {
  SignUp = 'Signed up and logged in successfully',
  SignIn = 'Signed in successfully',
  NoUser = 'No current user',
  UserFound = 'Current user found'
}

export interface SuccessfulResponse {
  success: true
  message: SuccessMessage
}

export type User = {
  id: string;
  email: string;
  username: string;
}
