export type RootStackParamList = {
  Entry: undefined;
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
};

export type DatabaseErrorResponse = {
  message: string;
  status: number;
  success: false;
}

enum SuccessMessage {
  SignUp = 'Signed up and logged in successfully',
  SignIn = 'Signed in successfully',
  NoUser = 'No current user',
  UserFound = 'Current user found',
  CreateList = 'List successfully created'
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

export interface List {
  id: string;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
  title: string | null;
}

export type ListItem = {
  id: string;
  item: string;
  listId: string;
  bought: boolean;
  quantity: number | null;
}

export interface ListWithItems extends List {
  items: ListItem[];
}