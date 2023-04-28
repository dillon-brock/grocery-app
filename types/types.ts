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

export type User = {
  id: string;
  email: string;
  username: string;
}
